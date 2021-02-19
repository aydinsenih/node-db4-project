exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("recipes_ingredients")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("recipes_ingredients").insert([
                {
                    ingredientID: 5,
                    recipeID: 2,
                    quantity: 3.02,
                    stepNumber: 1,
                },
                {
                    ingredientID: 3,
                    recipeID: 3,
                    quantity: 4.38,
                    stepNumber: 2,
                },
                {
                    ingredientID: 5,
                    recipeID: 2,
                    quantity: 8.55,
                    stepNumber: 3,
                },
                {
                    ingredientID: 5,
                    recipeID: 4,
                    quantity: 5.62,
                    stepNumber: 4,
                },
                {
                    ingredientID: 3,
                    recipeID: 1,
                    quantity: 1.9,
                    stepNumber: 5,
                },
                {
                    ingredientID: 5,
                    recipeID: 1,
                    quantity: 6.51,
                    stepNumber: 6,
                },
                {
                    ingredientID: 2,
                    recipeID: 5,
                    quantity: 9.89,
                    stepNumber: 7,
                },
                {
                    ingredientID: 1,
                    recipeID: 1,
                    quantity: 7.82,
                    stepNumber: 8,
                },
                {
                    ingredientID: 2,
                    recipeID: 5,
                    quantity: 6.53,
                    stepNumber: 9,
                },
                {
                    ingredientID: 3,
                    recipeID: 5,
                    quantity: 4.08,
                    stepNumber: 10,
                },
                {
                    ingredientID: 4,
                    recipeID: 1,
                    quantity: 3.94,
                    stepNumber: 11,
                },
                {
                    ingredientID: 2,
                    recipeID: 4,
                    quantity: 8.35,
                    stepNumber: 12,
                },
                {
                    ingredientID: 3,
                    recipeID: 1,
                    quantity: 6.35,
                    stepNumber: 13,
                },
                {
                    ingredientID: 4,
                    recipeID: 5,
                    quantity: 6.51,
                    stepNumber: 14,
                },
                {
                    ingredientID: 3,
                    recipeID: 1,
                    quantity: 8.97,
                    stepNumber: 15,
                },
                {
                    ingredientID: 2,
                    recipeID: 2,
                    quantity: 3.33,
                    stepNumber: 16,
                },
                {
                    ingredientID: 5,
                    recipeID: 4,
                    quantity: 4.01,
                    stepNumber: 17,
                },
                {
                    ingredientID: 3,
                    recipeID: 2,
                    quantity: 4.4,
                    stepNumber: 18,
                },
                {
                    ingredientID: 4,
                    recipeID: 2,
                    quantity: 3.95,
                    stepNumber: 19,
                },
                {
                    ingredientID: 2,
                    recipeID: 1,
                    quantity: 5.43,
                    stepNumber: 20,
                },
                {
                    ingredientID: 4,
                    recipeID: 5,
                    quantity: 5.45,
                    stepNumber: 21,
                },
                {
                    ingredientID: 2,
                    recipeID: 3,
                    quantity: 4.09,
                    stepNumber: 22,
                },
                {
                    ingredientID: 1,
                    recipeID: 4,
                    quantity: 9.97,
                    stepNumber: 23,
                },
                {
                    ingredientID: 3,
                    recipeID: 3,
                    quantity: 3.76,
                    stepNumber: 24,
                },
                {
                    ingredientID: 4,
                    recipeID: 2,
                    quantity: 4.31,
                    stepNumber: 25,
                },
            ]);
        });
};
