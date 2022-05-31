import time
from flask import Flask, request
from recipes.recipes import getRecipes, getRecipeInfo

app = Flask(__name__)

@app.route('/time')
def index():
    return {'time': time.time()}


@app.route('/search', methods = ['GET'])
def search():

    global results 

    results = getRecipes(request.args.get('query'))

    return results


@app.route('/recipe', methods = ['GET'])
def recipe():

    recipeInfo = getRecipeInfo(request.args.get('recipeID'))

    if len(results)


if __name__ == "__main__":
    app.run()