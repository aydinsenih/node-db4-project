exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("ingredient")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("ingredient").insert([
                {
                    ingredientName: "Sciurus vulgaris",
                },
                {
                    ingredientName: "Microcebus murinus",
                },
                {
                    ingredientName: "Nycticorax nycticorax",
                },
                {
                    ingredientName: "Larus fuliginosus",
                },
                {
                    ingredientName: "Motacilla aguimp",
                },
            ]);
        });
};
