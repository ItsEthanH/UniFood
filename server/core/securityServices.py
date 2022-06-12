import uuid
import hashlib

def hash(input, *salt):

    if salt == None: salt = uuid.uuid4().hex
    
    input = (input + salt).encode()

    digest = hashlib.sha256(input).hexdigest()

    return digest, salt
