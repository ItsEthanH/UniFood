import time, json, mysql.connector
from flask import Flask, make_response, request, session
from recipes.recipes import getRecipes, getRecipeInfo, getRelatedRecipes
from core.dataAccess import registerUser, authenticateUser
from mealplanning.mealplan import addToMealPlan, getMealPlanWeek
from config import enc_key, MYSQL_ADDON_HOST, MYSQL_ADDON_USER, MYSQL_ADDON_PASSWORD
from mealplanning.mealplan import getMealPlanDay
from datetime import datetime

app = Flask(__name__)
app.secret_key = enc_key

db = mysql.connector.connect(
    host=MYSQL_ADDON_HOST,
    user=MYSQL_ADDON_USER,
    password=MYSQL_ADDON_PASSWORD
)

sql = db.cursor()

@app.route('/time')
def index():
    return {'time': time.time()}


@app.route('/search', methods = ['GET'])
def search():

    print(request.headers.get('Authorization'))

    global results 

    results = getRecipes(request.args.get('query'))

    resp = make_response(results)
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@app.route('/recipe', methods = ['GET'])
def recipe():

    print(request.headers.get('Authorization'))

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


@app.route('/mealplanner', methods = ['GET', 'POST'])
def mealplan():

    if request.method == 'GET':

        time = request.args.get('date')
        time = datetime.utcfromtimestamp(int(time)).strftime('%Y-%m-%d')/1000

        if request.args.get('period') == 'day':

            results = getMealPlanDay(request.headers.get('Authorization'), time)
            resp = make_response({"results": results})
            resp.headers['Access-Control-Allow-Origin'] = '*'

            return resp
        
        elif request.args.get('period') == 'week':

            results = getMealPlanWeek(request.headers.get('Authorization'), time)
            resp = make_response({"results": results})
            resp.headers['Access-Control-Allow-Origin'] = '*'

            return resp

    elif request.method == 'POST':

        results = addToMealPlan(request.headers.get('Authorization'), json.loads(request.data)[0])
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