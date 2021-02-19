exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("recipe")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("recipe").insert([
                {
                    recipeName: "Bingen Lupine",
                    creator: "Ursala Mateo",
                },
                {
                    recipeName: "African Lovegrass",
                    creator: "Olav Gaukrodge",
                },
                {
                    recipeName: "Maidenhair Spleenwort",
                    creator: "Rudolf Gilberthorpe",
                },
                {
                    recipeName: "Pulvinate Euopsis Lichen",
                    creator: "Roscoe Bowmen",
                },
                {
                    recipeName: "Tiehm's Blazing Star",
                    creator: "Appolonia Ebertz",
                },
            ]);
        });
};
