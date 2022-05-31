from core.spoonacular import getRecipesBySearch, getRecipeInformation
from core.securityServices import inputSanitiser
import random

def getRecipes(query):

    results = getRecipesBySearch(query, 20)

    return results


def getRecipeInfo(recipeID):

    # Try and get the recipe information for a given ID (catching API quota exceptions, mainly)
    try:
        recipeInfo = getRecipeInformation(recipeID, False)
    except: return {}

    # Looping through recipe ingredients to capitalise and add units
    for ingredient in recipeInfo["extendedIngredients"]:
        ingredient["name"] = ingredient["name"].capitalize() + " ({} {})"
        ingredient["name"] = ingredient["name"].format(ingredient["amount"], ingredient["unit"])

    recipeInfo["spoonacularScore"] = int(recipeInfo["spoonacularScore"])

    return recipeInfo


def getRelatedRecipes(recipeID, recipes):

    # Loop through list of recipes and remove the recipe being viewed from the list so it isn't returned
    for recipe in recipes["results"]:
        if recipe["id"] == recipeID:
            recipes["results"].pop(recipes["results"].index(recipe))

    # Generate random index between 0 and length of list, and assign recipe of that index to rel1
    relatedImage1 = recipes["results"][random.randint(0, len(recipes["results"])) - 1]

    # Remove the recipe assigned as rel1 from the list so it cannot be picked again
    for recipe in recipes["results"]:
        if recipe["id"] == relatedImage1["id"]:
            recipes["results"].pop(recipes["results"].index(relatedImage1))

    # Generate random index between 0 and length of list, and assign recipe of that index to rel2
    relatedImage2 = recipes["results"][random.randint(0, len(recipes["results"])) - 1]

    # Convert images to 240x150
    relatedImage1["image"] = imageResize(relatedImage1["image"])
    relatedImage2["image"] = imageResize(relatedImage2["image"])

    return relatedImage1, relatedImage2


def imageResize(image):

    url = image.split("-")
    url[1] = '-240x150.jpg'

    image = url[0] + url[1]

    return image