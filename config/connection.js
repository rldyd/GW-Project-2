<<<<<<< HEAD
// module.exports = 
=======
<<<<<<< HEAD
require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
=======
const sequelize = require('sequelize');
>>>>>>> d0d0773fc723ee46c8916c42f54c04bbb8708e6d
>>>>>>> d3f381042a9868843325afe7b995863ac666fbc1
