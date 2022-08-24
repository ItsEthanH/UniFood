import base64
import json, uuid
from core.tokens import jwtGenerate
from core.spoonacular import mealPlanConnectUser
from core.securityServices import hash, encrypt, decrypt

# Registering a new user (Signing up)
def registerUser(user):

    # user = user.to_dict()
    user = json.loads(user)

    # Open file and check email is not already registered
    f = open("../database/users.json", "r")
    users = json.loads(f.read())
    f.close()

    for u in users:
        decrypted = decrypt(str.encode(u))
        decrypted = json.loads(decrypted.replace("'", "\""))

        i = users.index(u)
        users[i] = decrypted
        

        if user["email"] == decrypted["email"]: return False
        else: continue
        

    # for u in users:
    #     # u = decrypt(u)

    #     if user["email"] == u["email"]: return False
    #     else: continue


    # Check if password and confirm-password fields match; return if not
    if user["password"] == user["confirmPassword"]:

        try:
            apiUsername, apiHash = mealPlanConnectUser(user)
        except: return False

        # Compile user information
        user["password"], user["salt"] = hash(user["password"], uuid.uuid4().hex)
        user["apiUsername"] = apiUsername
        user["apiHash"] = apiHash
        user["tier"] = 0
        user["timezone"] = "Europe/London"
        user["theme"] = 0
        user.pop("confirmPassword")

        # Insert user into database
        users.append(user)

        for user in users:
            encrypted = encrypt(str(user))
            decoded = encrypted.decode()
            i = users.index(user)
            users[i] = decoded

        users = json.dumps(users, indent=4)

        f = open("../database/users.json", "w")
        f.write(users)
        f.close()

        # Generate JWT for user's initial session
        return True, jwtGenerate(user)
        
    else: return False


# Authenticate an existing user (Logging in)
def authenticateUser(credentials):

    credentials = json.loads(credentials)

    # Open file and check email is not already registered
    f = open("../database/users.json", "r")
    users = json.loads(f.read())
    f.close()

    for user in users:
        decrypted = decrypt(str.encode(user))
        decrypted = json.loads(decrypted.replace("'", "\""))

        i = users.index(user)
        users[i] = decrypted

    for user in users:

        if credentials["email"] == user["email"]:

            # Hash password credential with salt of found user
            password, __salt = hash(credentials["password"], user["salt"])

            if password == user["password"]: 
                jwt = jwtGenerate(user)
                return True, jwt
            else: return False

        else: continue

    return False