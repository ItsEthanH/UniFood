import json
from core.tokens import jwtGenerate
from core.spoonacular import mealPlanConnectUser
from core.securityServices import hash

# Registering a new user (Signing up)
def registerUser(user):

    user = user.to_dict()

    # Open file and check email is not already registered
    f = open("../database/users.json", "r")
    users = json.loads(f.read())
    f.close()

    for u in users:
        if user["email"] == u["email"]: return False
        else: continue


    # Check if password and confirm-password fields match; return if not
    if user["password"] == user["confirm-password"]:

        # try:
        #     apiUsername, apiHash = mealPlanConnectUser(user)
        # except: return False

        # Compile user information
        user["password"], user["salt"] = hash(user["password"])
        # user["apiUsername"] = apiUsername
        # user["apiHash"] = apiHash
        user["tier"] = 0
        user["timezone"] = "Europe/London"
        user["theme"] = 0
        user.pop("confirm-password")

        # Insert user into database
        insertInto("../database/users.json", user)

        # Generate JWT for user's initial session
        return True, jwtGenerate(user)
        
    else: return False


# Authenticate an existing user (Logging in)
def authenticateUser(credentials):

    credentials = credentials.to_dict()

    # Open file and check email is not already registered
    f = open("../database/users.json", "r")
    users = json.loads(f.read())
    f.close()

    for user in users:

        if credentials["email"] == user["email"]:

            # Hash password credential with salt of found user
            password = hash(credentials["password"], user["salt"])

            if password == user["password"]: return jwtGenerate(user)
            else: return False

        else: continue

    return False


# ----------------------------------------------------------------------------------- #

# Helper function to write to files
def insertInto(filepath, data):

    f = open(filepath, "r")
    x = json.loads(f.read())
    f.close()

    x.append(data)
    x = json.dumps(x, indent=4)

    f = open(filepath, "w")
    f.write(x)
    f.close()