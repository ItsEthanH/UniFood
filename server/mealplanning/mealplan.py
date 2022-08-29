import re, requests
import jwt
from config import enc_key
from core.spoonacular import mealPlanAddTo, mealPlanGetDay, mealPlanGetWeek

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

    return mealPlanGetDay(decoded["api"], decoded["hsh"], str(date))


def getMealPlanWeek(t, date):

    decoded = jwt.decode(t, enc_key, algorithms=["HS256"])

    return mealPlanGetWeek(decoded["api"], decoded["hsh"], str(date))

# addToMealPlan(token, items)
