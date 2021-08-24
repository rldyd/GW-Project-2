
const seedAges = require('./age-seeds');
const seedHealth = require('./health-seeds');
const seedName = require('./name-seeds');
const seedTypes = require('./type-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedAges();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedHealth();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedName();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedTypes();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();