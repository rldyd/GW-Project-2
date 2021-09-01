const sequelize = require("../config/connection");
const { post } = require("../controllers");
const { Pet } = require("../models") 

const petData = [
    {
        id: 1,
        pet_name:"fido",
        pet_age: 2,
        pet_compatatibility: "very compatible",
        pet_type: "dog",
        pet_health: "very good",

    },
    {
        id: 2,
        pet_name:"rex",
        pet_age: 2,
        pet_compatatibility: "very compatible",
        pet_type: "dog",
        pet_health: "very good",

    },
];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets