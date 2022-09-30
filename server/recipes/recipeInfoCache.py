import json

def cacheAdd(id, title):
    f = open('../../database/cacheRecipeInfo.json', 'r')
    recipeInfo = json.loads(f.read())
    f.close()

    recipeInfo[id] = title

    if str(id) in recipeInfo.keys():
        return

    f = open('../../database/cacheRecipeInfo.json', 'w')
    f.write(json.dumps(recipeInfo, indent=4))
    f.close()


def cacheFetch(id):
    f = open('../../database/cacheRecipeInfo.json', 'r')
    recipeInfo = json.loads(f.read())
    f.close()

    if str(id) in recipeInfo.keys():
        return {"hit": True, "title": recipeInfo[str(id)]}
    else: return {"hit": False}


def cacheFetchAll():
    f = open('../../database/cacheRecipeInfo.json', 'r')
    recipeInfo = json.loads(f.read())
    f.close()

    titles = []
    for title in recipeInfo.values():
        titles.append(title)

    return titles
