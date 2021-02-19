const express = require("express");

const Recipes = require("./recipes-model");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const recipes = await Recipes.getRecipes();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get("/:id/shoppinglist", async (req, res) => {
    try {
        const id = req.params.id;
        const recipes = await Recipes.getShoppingList(id);
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});
router.get("/:id/instructions", async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const instructions = await Recipes.getInstructions(id);
        res.status(200).json(instructions);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;
