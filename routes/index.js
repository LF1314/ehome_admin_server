var express = require('express');
var router = express.Router();
const newRouter = require('./news')
const adminrouter = require('./users')
const categoryrouter = require('./category')
/* GET home page. */
router.use('/admin',adminrouter)

router.use('/news',newRouter)

router.use('/category',categoryrouter)

module.exports = router;
