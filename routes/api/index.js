const router = require('express').Router();
const ageRoutes = require('./age-routes');
const healthRoutes = require('./health-routes');
const typeRoutes = require('./type-routes');
const nameRoutes = require('./name-routes');

router.use('/ages', ageRoutes);
router.use('/health', healthRoutes);
router.use('/types', typeRoutes);
router.use('/names', nameRoutes);

module.exports = router;