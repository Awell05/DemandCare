const router = require('express').Router();
const categoryRoutes = require('./categoryroutes');


router.use('/category', categoryRoutes);


module.exports = router;