
// import all models
const Pet = require('./Pet');
const User = require('./User');

// create associations
Pet.belongsTo(User);

User.hasMany(Pet);

module.exports = { Pet, User };
