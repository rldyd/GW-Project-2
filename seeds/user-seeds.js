const sequleize = require("../config/connection");
const { User } = require("../models");

const userData = [
    {
       username: "max",
       password: "password1",
       email: "max@email.com", 
    },
    {
        username: "Kyle",
        password: "wordpass",
        email: "kyle@email.com", 
     }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;