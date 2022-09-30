import re, requests, time
import jwt
from config import enc_key
from core.spoonacular import mealPlanAddTo, mealPlanGetDay, mealPlanGetWeek, getRecipeInformationBulk
from mealplanning.mealCache import cacheAdd, cacheFetch
#token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3IiOiJFdGllbm5lIEJyYW5kIiwibHZsIjowLCJ0bXoiOiJFdXJvcGUvTG9uZG9uIiwidGhtIjowLCJhcGkiOiJmZGM3ZWZhYy1hM2RlLTQxYTYtYTFmYy0zNTc0MzU4ODA1YWQiLCJoc2giOiIwYWRjMTdkZmVmNTYwMmJkNzEwOGNiZWNiMjMwYmI3ZDQ2MGYwZTM0IiwiZXhwIjoxNjU3NzYyMDMwfQ.q6U4pJOQ2KuadsfwhUZHMaBXLbmbZN220BRDLETnFEk"

def addToMealPlan(t, i):

    if i["type"] == "Breakfast":
        i["type"] = 1
    elif i["type"] == "Lunch":
        i["type"] = 2
    else: i["type"] = 3

    payload = {
        "date": i["date"]/1000,
        "slot": i["type"],
        "position": 0,
        "type": "RECIPE",
        "value": {
            "id": i["recipeid"],
            "servings": i["quantity"],
            "title": i["name"],
            "imageType": "jpg"
        }
    }

    decoded = jwt.decode(t, enc_key, algorithms=["HS256"])

    try:
        mealPlanAddTo(decoded["api"], decoded["hsh"], payload)   
        return True
    except:
        return False


def getMealPlanDay(t, date):

    # Decode JWT
    decoded = jwt.decode(t, enc_key, algorithms=["HS256"])

    # Get users meal plan
    mealplan = mealPlanGetDay(decoded["api"], decoded["hsh"], str(date))

    # Meal variable initialisation
    breakfast = None
    lunch = None
    dinner = None
    ids = []

    # Get the recipe IDs of each recipie in the meal plan
    for item in mealplan["items"]:
        ids.append(item["value"]["id"])

    idString = ",".join(ids)

    # Fetch recipe information
    recipeInfo = getRecipeInformationBulk(idString, False)

    for item in mealplan["items"]:

        if item['slot'] == 1:
            breakfast = item
            breakfast["nutrients"] = mealplan["nutritionSummaryBreakfast"]["nutrients"]

            for recipe in recipeInfo:

                if int(recipe["id"]) == int(item["value"]["id"]):
                    breakfast["value"]["instructions"] = recipe["analyzedInstructions"]
                    breakfast["value"]["ingredients"] = recipe["extendedIngredients"]
                    breakfast["value"]["image"] = recipe["image"]

        elif item['slot'] == 2:
            lunch = item
            lunch["nutrients"] = mealplan["nutritionSummaryLunch"]["nutrients"]

            for recipe in recipeInfo:
                if int(recipe["id"]) == int(item["value"]["id"]):
                    lunch["value"]["i3nstructions"] = recipe["analyzedInstructions"]
                    lunch["value"]["ingredients"] = recipe["extendedIngredients"]
                    lunch["value"]["image"] = recipe["image"]
        else:
            dinner = item
            dinner["nutrients"] = mealplan["nutritionSummaryDinner"]["nutrients"]

            for recipe in recipeInfo:
                if int(recipe["id"]) == int(item["value"]["id"]):
                    dinner["value"]["instructions"] = recipe["analyzedInstructions"]
                    dinner["value"]["ingredients"] = recipe["extendedIngredients"]
                    dinner["value"]["image"] = recipe["image"]

    mealdata = {
        'week': [
            {
                "day": mealplan["day"],
                "meals": {
                    "breakfast": breakfast,
                    "lunch": lunch,
                    "dinner": dinner
                }
            }
        ]
    }

    meals = {
        "meals": {
            "breakfast": breakfast,
            "lunch": lunch,
            "dinner": dinner
        }
    }

    mealdata = {
        "week": {
            mealplan["day"]: meals
        }
    }

    return mealdata


def getMealPlanWeek(t, date):

    results = cacheFetch(date)

    if results["hit"] == True:
        return results["plan"]
    else:

        decoded = jwt.decode(t, enc_key, algorithms=["HS256"])

        days = {}
        breakfast = None
        lunch = None
        dinner = None

        # Get meal plan
        mealplan = mealPlanGetWeek(decoded["api"], decoded["hsh"], str(date))

        index = 0

        allids = []

        for day in mealplan["days"]:
            for item in day["items"]:
                allids.append(item["value"]["id"])

        recipeInfo = getRecipeInformationBulk(",".join(allids), False)
        
        # Loop through each day of mealplan
        for day in mealplan["days"]:

            # Loop through each recipe in a day 
            for item in day["items"]:
        
                # Check if item is breakfast, lunch, or dinner and add nutritional info
                if item["slot"] == 1:
                    breakfast = item
                    breakfast["nutrients"] = day["nutritionSummaryBreakfast"]["nutrients"]

                    # Add extra info
                    for recipe in recipeInfo:

                        if int(recipe["id"]) == int(item["value"]["id"]):
                            breakfast["value"]["instructions"] = recipe["analyzedInstructions"]
                            breakfast["value"]["ingredients"] = recipe["extendedIngredients"]
                            breakfast["value"]["image"] = recipe["image"]

                elif item["slot"] == 2:
                    lunch = item
                    lunch["nutrients"] = day["nutritionSummaryLunch"]["nutrients"]

                    for recipe in recipeInfo:

                        if int(recipe["id"]) == int(item["value"]["id"]):
                            lunch["value"]["instructions"] = recipe["analyzedInstructions"]
                            lunch["value"]["ingredients"] = recipe["extendedIngredients"]
                            lunch["value"]["image"] = recipe["image"]

                else:
                    dinner = item
                    dinner["nutrients"] = day["nutritionSummaryDinner"]["nutrients"]

                    for recipe in recipeInfo:

                        if int(recipe["id"]) == int(item["value"]["id"]):
                            dinner["value"]["instructions"] = recipe["analyzedInstructions"]
                            dinner["value"]["ingredients"] = recipe["extendedIngredients"]
                            dinner["value"]["image"] = recipe["image"]
            
            # Add meals to an object using the day of the week as a key
            days[day["day"]] = {
                "meals": {
                    "breakfast": breakfast,
                    "lunch": lunch,
                    "dinner": dinner
                }
            }

            breakfast = None
            lunch = None
            dinner = None

            index = index + 1
        
        # Assign falsey value if day is not populated
        if "Monday" not in days:
            days["Monday"] = None
        if "Tuesday" not in days:
            days["Tuesday"] = None
        if "Wednesday" not in days:
            days["Wednesday"] = None
        if "Thursday" not in days:
            days["Thursday"] = None
        if "Friday" not in days:
            days["Friday"] = None
        if "Saturday" not in days:
            days["Saturday"] = None
        if "Sunday" not in days:
            days["Sunday"] = None

        # Create overall data struct
        mealdata = {
            'week': {
                "Monday": days["Monday"],
                "Tuesday": days["Tuesday"],
                "Wednesday": days["Wednesday"],
                "Thursday": days["Thursday"],
                "Friday": days["Friday"],
                "Saturday": days["Saturday"],
                "Sunday": days["Sunday"]
            }
        }

        cacheAdd(date, mealdata)

        return mealdata
