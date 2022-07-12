import uuid
import hashlib
import json
from config import enc_key
from cryptography.fernet import Fernet

f = Fernet(enc_key)

def hash(input, salt):
    
    input = (str(input) + str(salt)).encode()

    digest = hashlib.sha256(input).hexdigest()

    return digest, salt


def encrypt(plaintext):

    return f.encrypt(json.dumps(plaintext).encode())


def decrypt(ciphertext):

    return json.loads(f.decrypt(ciphertext))