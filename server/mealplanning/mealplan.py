import re, requests
import jwt
from config import enc_key
from core.spoonacular import mealPlanAddTo, mealPlanGetDay, mealPlanGetWeek, getRecipeInformationBulk

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

    mealPlanAddTo(decoded["api"], decoded["hsh"], payload)


def getMealPlanDay(t, date):

    decoded = jwt.decode(t, enc_key, algorithms=["HS256"])

    mealplan = mealPlanGetDay(decoded["api"], decoded["hsh"], str(date))

    breakfast = None
    lunch = None
    dinner = None
    ids = []

    for item in mealplan["items"]:
        ids.append(item["value"]["id"])

    idString = ",".join(ids)

    recipeInfo = getRecipeInformationBulk(idString, False)

    for item in mealplan["items"]:

        if item['position'] == 1:
            breakfast = item
            breakfast["nutrients"] = mealplan["nutritionSummaryBreakfast"]["nutrients"]

            for recipe in recipeInfo:

                if int(recipe["id"]) == int(item["value"]["id"]):
                    breakfast["value"]["instructions"] = recipe["analyzedInstructions"]
                    breakfast["value"]["ingredients"] = recipe["extendedIngredients"]

        elif item['position'] == 2:
            lunch = item
            lunch["nutrients"] = mealplan["nutritionSummaryLunch"]["nutrients"]

            for recipe in recipeInfo:
                if int(recipe["id"]) == int(item["value"]["id"]):
                    lunch["value"]["instructions"] = recipe["analyzedInstructions"]
                    lunch["value"]["ingredients"] = recipe["extendedIngredients"]
        else:
            dinner = item
            dinner["nutrients"] = mealplan["nutritionSummaryDinner"]["nutrients"]

            for recipe in recipeInfo:
                if int(recipe["id"]) == int(item["value"]["id"]):
                    dinner["value"]["instructions"] = recipe["analyzedInstructions"]
                    dinner["value"]["ingredients"] = recipe["extendedIngredients"]

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
    print(mealdata)

    return mealplan


def getMealPlanWeek(t, date):

    decoded = jwt.decode(t, enc_key, algorithms=["HS256"])

    mealplan = mealPlanGetWeek(decoded["api"], decoded["hsh"], str(date))
    print(mealplan["items"])

# addToMealPlan(token, items)
