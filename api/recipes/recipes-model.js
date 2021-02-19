const db = require("../../data/db-config");

function getRecipes() {
    return db("recipe");
}

function getShoppingList(recipe_id) {
    return db("recipe as r")
        .join("recipes_ingredients as ri", "ri.recipeid", "r.recipeid")
        .join("ingredient as i", "i.ingredientid", "ri.ingredientid")
        .select("i.ingredientName", "ri.quantity")
        .where("r.recipeid", recipe_id);
}

function getInstructions(recipe_id) {
    return db("recipe as r")
        .join("recipes_ingredients as ri", "ri.recipeid", "r.recipeid")
        .join("ingredient as i", "i.ingredientid", "ri.ingredientid")
        .select("ri.stepNumber", "i.ingredientName", "ri.quantity")
        .where("r.recipeid", recipe_id)
        .orderBy("ri.stepNumber");
}

module.exports = { getRecipes, getShoppingList, getInstructions };
