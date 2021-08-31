const router = require('express').Router();

const petRoutes = require('./pets-routes');



router.use('/pets', petRoutes);

module.exports = router;