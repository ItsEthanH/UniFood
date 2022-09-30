import json, time, datetime

def cacheAdd(date, mealplan):

    f = open('../database/cacheMealPlan.json', 'r')
    mealPlan = json.loads(f.read())

    mealPlan[date] = mealplan

    f = open('../database/cacheMealPlan.json', 'w')
    f.write(json.dumps(mealPlan, indent=4))
    f.close()


def cacheFetch(date):
    f = open('../database/cacheMealPlan.json', 'r')
    mealPlan = json.loads(f.read())
    f.close()

    if str(date) in mealPlan.keys():
        return {"hit": True, "plan": mealPlan[str(date)]}
    else: return {"hit": False}


def cacheClear():

    f = open('../database/cacheMealPlan.json', 'w')
    f.write(json.dumps({}, indent=4))
    f.close()


