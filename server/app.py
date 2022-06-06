import time
from flask import Flask, request
from recipes.recipes import getRecipes, getRecipeInfo, getRelatedRecipes

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
    # TO BE ADDED LATER WHEN HOOKED UP

    # if len(results["results"]) > 2:
    #     relatedRecipe1, relatedRecipe2 = getRelatedRecipes(results, id)
    # else: relatedRecipe1, relatedRecipe2 = None, None


    # ADD THE BELOW TO THE RETURN JSON

    #  "relatedRecipes": [relatedRecipe1, relatedRecipe2]

    return {"recipeInfo": recipeInfo}


if __name__ == "__main__":
    app.run()