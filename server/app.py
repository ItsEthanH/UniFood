import time
from flask import Flask, make_response, request
from recipes.recipes import getRecipes, getRecipeInfo, getRelatedRecipes
from core.dataAccess import registerUser, authenticateUser

app = Flask(__name__)

@app.route('/time')
def index():
    return {'time': time.time()}


@app.route('/search', methods = ['GET'])
def search():

    global results 

    results = getRecipes(request.args.get('query'))

    resp = make_response(results)
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@app.route('/recipe', methods = ['GET'])
def recipe():

    results = getRecipeInfo(request.args.get('recipeID'))
    # TO BE ADDED LATER WHEN HOOKED UP

    # if len(results["results"]) > 2:
    #     relatedRecipe1, relatedRecipe2 = getRelatedRecipes(results, id)
    # else: relatedRecipe1, relatedRecipe2 = None, None


    # ADD THE BELOW TO THE RETURN JSON

    #  "relatedRecipes": [relatedRecipe1, relatedRecipe2]
    resp = make_response({"results": results})
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@app.route('/register', methods = ['POST'])
def register():

    resp = make_response({"results": registerUser(request.data)})
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@app.route('/login', methods = ['POST'])
def login():

    resp = make_response({"results": authenticateUser(request.data)})
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


if __name__ == "__main__":
    app.run()