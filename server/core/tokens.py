from config import enc_key
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

    # Store JWT details
    f = open("../database/tokens.json", "r")
    x = json.loads(f.read())
    f.close()

    x.append({"sig": signature, "exp": payload["exp"]})
    x = json.dumps(x, indent=4)

    f = open("../database/tokens.json", "w")
    f.write(x)
    f.close()

    # Return encoded JWT
    return encodedJWT


# Validate an existing JWT
def jwtValidate(token):

    f = open("../database/tokens.json", "r")
    jwts = json.loads(f.read())
    f.close()

    # Split the JWT to retrieve the signature
    splitJWT = re.split("\.", token)
    sig = splitJWT[2]

    # Loop through JWTs
    for j in jwts:

        # Return True if the signature matches and the expiry time has not passed
        if sig == j["sig"] and int(time.time()) < j["exp"]:
            return True
        else:
            continue
        
    # If all JWTs have been checked and there is no valid one, return False
    return False


# Read data from an existing JWT
def jwtRead(token, keys: list):

    jwtPayload = jwt.decode(token, enc_key, algorithms=["HS256"])

    values = []
    for k in keys:
        if k in jwtPayload:
            values.append(jwtPayload[k])

    return values


# Remove an existing JWT (optional in case user is a guest)
def jwtRemove(*jwt):

    if jwt != None:
        splitJWT = re.split("\.", jwt)
        signature = splitJWT[2]

        f = open("../database/tokens.json", "r")
        tokens = json.loads(f.read())
        f.close()

        for token in tokens:

            if signature == token["sig"]: 
                tokens.pop(tokens.index(token))
                break

            else: continue

        tokens = json.dumps(tokens, indent=4)

        f = open("../database/tokens.json", "w")
        f.write(tokens)
        f.close()

        return