from config import enc_key, db, sql
import jwt, time, re, json
# from core.dataAccess import insertInto

# Generate a fresh JWT
def jwtGenerate(userDetails):

    # Assemble JWT payload
    payload = {
        "usr": userDetails["firstName"] + " " + userDetails["lastName"],
        "lvl": userDetails["tier"],
        "tmz": userDetails["timezone"],
        "thm": userDetails["theme"],
        "api": userDetails["apiUsername"],
        "hsh": userDetails["apiHash"],
        "exp": int(time.time()) + 21600
    }

    # Assemble the JWT
    encodedJWT = jwt.encode(payload, enc_key, algorithm="HS256")
    splitJWT = re.split("\.", encodedJWT)
    signature = splitJWT[2]

    sql.callproc('GetUserIDByAPIHash', [userDetails["apiUsername"],])
    for result in sql.stored_results():
        userID = result.fetchall()[0]

    userID = userID[0]

    sql.callproc('GenerateJWT', [signature, payload["exp"], userID,])
    db.commit()

    # Return encoded JWT
    return encodedJWT


# Validate an existing JWT
def jwtValidate(token):

    # Split the JWT to retrieve the signature
    splitJWT = re.split("\.", token)
    sig = splitJWT[2]

    sql.callproc('ValidateJWT', [sig,])
    for result in sql.stored_results():
        expiry = result.fetchall()[0]

    expiry = expiry[0]

    if int(time.time()) < expiry:
        return True
    else: return False


# Read data from an existing JWT
def jwtRead(token, keys: list):

    jwtPayload = jwt.decode(token, enc_key, algorithms=["HS256"])

    values = []
    for k in keys:
        if k in jwtPayload:
            values.append(jwtPayload[k])

    return values


def jwtRemove(token):

    info = jwt.decode(token, enc_key, algorithms=["HS256"])

    sql.callproc('GetUserIDByAPIHash', [info['api'],])

    for result in sql.stored_results():
        userID = result.fetchall()[0]

    userID = userID[0]

    sql.callproc('RemoveJWT', [userID,])
    db.commit()
    return