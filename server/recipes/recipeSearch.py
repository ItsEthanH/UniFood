from core.spoonacular import getRecipesBySearch

def searchbar(query):

    results = getRecipesBySearch(query, 20)

    return results