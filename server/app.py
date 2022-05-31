import time
from flask import Flask, request
from recipes.recipeSearch import searchbar

app = Flask(__name__)

@app.route('/time')
def index():
    return {'time': time.time()}


@app.route('/search', methods = ['GET'])
def search():

    global results 

    results = searchbar(request.args.get('query'))

    return results

if __name__ == "__main__":
    app.run()