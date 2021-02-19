exports.up = function (knex) {
    return knex.schema
        .createTable("recipe", (table) => {
            table.increments("recipeID");
            table.string("recipeName", 128).notNullable();
            table.string("creator");
        })
        .createTable("ingredient", (table) => {
            table.increments("ingredientID");
            table.string("ingredientName", 128).notNullable();
        })
        .createTable("recipes_ingredients", (table) => {
            table.increments();
            table
                .integer("ingredientID")
                .unsigned()
                .notNullable()
                .references("ingredientID")
                .inTable("ingredient");
            table
                .integer("recipeID")
                .unsigned()
                .notNullable()
                .references("recipeID")
                .inTable("recipe");
            table.integer("stepNumber").notNullable();
            table.float("quantity").notNullable();
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("recipes_ingredients")
        .dropTable("ingredient")
        .dropTable("recipe");
};
