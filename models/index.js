// import all models
const Pet = require('./Pet');
const User = require('./User');
const Post = require('./Post');

// create associations
Pet.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Pet, {
    foreignKey: 'user_id'
});

User.belongsToMany(Pet, {
    through: Post,
    foreignKey: 'user_id'
});

Post.belongsTo(Pet, {
    foreignKey: 'pet_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { Pet, User };

