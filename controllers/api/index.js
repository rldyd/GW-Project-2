const router = require('express').Router();

const petRoutes = require('./pets-routes');
const userRoutes = require('./users-routes');

router.use('/pets', petRoutes);
router.use('/users', userRoutes);

module.exports = router;