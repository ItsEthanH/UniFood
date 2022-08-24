import json, uuid, mysql.connector
from core.tokens import jwtGenerate
from core.spoonacular import mealPlanConnectUser
from core.securityServices import hash, encrypt, decrypt
# from config import MYSQL_ADDON_HOST, MYSQL_ADDON_USER, MYSQL_ADDON_PASSWORD, MYSQL_ADDON_DB
from config import db, sql

# db = mysql.connector.connect(
#     host=MYSQL_ADDON_HOST,
#     user=MYSQL_ADDON_USER,
#     password=MYSQL_ADDON_PASSWORD,
#     database=MYSQL_ADDON_DB
# )

# sql = db.cursor()

# Registering a new user (Signing up)
def registerUser(user):

    user = json.loads(user)

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

        sql.callproc('RegisterUser', [user["firstName"], user["lastName"], user["email"], user["password"], user["salt"], user["apiUsername"], user["apiHash"], user["tier"], user["timezone"], user["theme"],])
        db.commit()

        return True, jwtGenerate(user)
        
    else: return False


# Authenticate an existing user (Logging in)
def authenticateUser(credentials):

    credentials = json.loads(credentials)

    sql.callproc('AuthenticateUser', [credentials["email"],])

    for result in sql.stored_results():
        details = result.fetchall()

    detup = details[0]
    p_password = detup[0]
    p_salt = detup[1]

    password, __salt = hash(credentials["password"], p_salt)

    if password == p_password:

        sql.callproc('GetUser', [credentials["email"],])

        for result in sql.stored_results():
            user = result.fetchall()
        
        (first_name, last_name, tier, theme, timezone, api_username, api_hash) = user[0]

        user = {
            "firstName": first_name,
            "lastName": last_name,
            "tier": tier,
            "timezone": timezone,
            "apiUsername": api_username,
            "apiHash": api_hash,
            "theme": theme
        }

        jwt = jwtGenerate(user)
        return True, jwt
    else: return False
