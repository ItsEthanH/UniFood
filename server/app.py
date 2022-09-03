import time, json
from flask import Flask, make_response, request, redirect, url_for
from recipes.recipes import getRecipes, getRecipeInfo, getRelatedRecipes
from core.dataAccess import registerUser, authenticateUser
from mealplanning.mealplan import addToMealPlan, getMealPlanWeek
from config import enc_key
from mealplanning.mealplan import getMealPlanDay
from datetime import datetime
from core.tokens import jwtRemove, jwtValidate

app = Flask(__name__)
app.secret_key = enc_key

@app.route('/search', methods = ['GET'])
def search():

    try: validToken = jwtValidate(request.headers.get('Authorization'))
    except: 
        resp = make_response({'results': 'JWTError'})
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp

    if validToken:
        global results 

        results = getRecipes(request.args.get('query'))

        resp = make_response(results)
        resp.headers['Access-Control-Allow-Origin'] = '*'

        return resp

    else:
        resp = make_response({'results': 'JWTError'})
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp


@app.route('/recipe', methods = ['GET'])
def recipe():

    # print(request.headers.get('Authorization'))
    try: validToken = jwtValidate(request.headers.get('Authorization'))
    except: 
        resp = make_response({'results': 'JWTError'})
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp

    if validToken:
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

    else:
        resp = make_response({'results': 'JWTError'})
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp


@app.route('/mealplanner', methods = ['GET', 'POST'])
def mealplan():

    try: validToken = jwtValidate(request.headers.get('Authorization'))
    except: 
        resp = make_response({'results': 'JWTError'})
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp

    if validToken:
        jwt = request.headers.get('Authorization').split()[1]

        if request.method == 'GET':

            if request.args.get('period') == 'day':

                results = getMealPlanDay(jwt, request.args.get('date'))
                resp = make_response({"results": results})
                resp.headers['Access-Control-Allow-Origin'] = '*'

                return resp
            
            elif request.args.get('period') == 'week':

                results = getMealPlanWeek(jwt, request.args.get('date'))
                resp = make_response({"results": results})
                resp.headers['Access-Control-Allow-Origin'] = '*'

                return resp

        elif request.method == 'POST':

            results = addToMealPlan(jwt, json.loads(request.data)[0])
            resp = make_response({"results": results})
            resp.headers['Access-Control-Allow-Origin'] = '*'

            return resp
    else:
        resp = make_response({'results': 'JWTError'})
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp


@app.route('/register', methods = ['POST'])
def register():

    try: jwtRemove(request.headers.get('Authorization').split()[1])
    except: pass

    resp = make_response({"results": registerUser(request.data)})
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@app.route('/login', methods = ['POST'])
def login():

    try: jwtRemove(request.headers.get('Authorization').split()[1])
    except: pass

    resp = make_response({"results": authenticateUser(request.data)})
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@app.route('/logout', methods = ['GET'])
def logout():

    try: jwtRemove(request.headers.get('Authorization').split()[1])
    except: pass

    resp = make_response()
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


if __name__ == "__main__":
    app.run()