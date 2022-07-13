from audioop import add
import time, json
from flask import Flask, make_response, request, session
from recipes.recipes import getRecipes, getRecipeInfo, getRelatedRecipes
from core.dataAccess import registerUser, authenticateUser
from mealplanning.mealplan import addToMealPlan, getMealPlanWeek
from config import enc_key
from mealplanning.mealplan import getMealPlanDay

app = Flask(__name__)
app.secret_key = enc_key

@app.route('/time')
def index():
    return {'time': time.time()}


@app.route('/search', methods = ['GET'])
def search():

    print(request.cookies.get('JWT'))

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


@app.route('/mealplanner', methods = ['GET'])
def mealplan():

    token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3IiOiJFdGllbm5lIEJyYW5kIiwibHZsIjowLCJ0bXoiOiJFdXJvcGUvTG9uZG9uIiwidGhtIjowLCJhcGkiOiJmZGM3ZWZhYy1hM2RlLTQxYTYtYTFmYy0zNTc0MzU4ODA1YWQiLCJoc2giOiIwYWRjMTdkZmVmNTYwMmJkNzEwOGNiZWNiMjMwYmI3ZDQ2MGYwZTM0IiwiZXhwIjoxNjU3NzYyMDMwfQ.q6U4pJOQ2KuadsfwhUZHMaBXLbmbZN220BRDLETnFEk"

    # items = [
    #     {
    #         "date": 1657824217,
    #         "slot": 1,
    #         "position": 0,
    #         "type": "RECIPE",
    #         "value": {
    #             "id": 639120,
    #             "servings": 4,
    #             "title": "Chocolate Oatmeal",
    #             "imageType": "jpg",
    #         }
    #     },
    #     {
    #         "date": 1657824217,
    #         "slot": 2,
    #         "position": 0,
    #         "type": "RECIPE",
    #         "value": {
    #             "id": 296213,
    #             "servings": 2,
    #             "title": "Spinach Salad with Roasted Vegetables and Spiced Chickpea",
    #             "imageType": "jpg",
    #         }
    #     },
    #     {
    #         "date": 1657824217,
    #         "slot": 3,
    #         "position": 0,
    #         "type": "RECIPE",
    #         "value": {
    #             "id": 654212,
    #             "servings": 6,
    #             "title": "Oven Roast",
    #             "imageType": "jpg",
    #         }
    #     }
    # ]

    # addToMealPlan(token, items)

    return {"results": getMealPlanDay(token, "2022-07-13")}


@app.route('/register', methods = ['POST'])
def register():

    resp = make_response({"results": registerUser(request.data)})
    resp.headers['Access-Control-Allow-Origin'] = '*'

    results = json.loads(resp.data)
    session["jwt"] = results['results'][1]

    return resp


@app.route('/login', methods = ['POST'])
def login():

    resp = make_response({"results": authenticateUser(request.data)})
    resp.headers['Access-Control-Allow-Origin'] = '*'

    results = json.loads(resp.data)
    resp.set_cookie("JWT", results['results'][1])

    return resp


if __name__ == "__main__":
    app.run()