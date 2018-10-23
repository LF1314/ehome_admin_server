var express = require('express');
var router = express.Router();
const newRouter = require('./news')
const adminrouter = require('./users')
const categoryrouter = require('./category')
const bannerRouter = require ('./banner.js')
/* GET home page. */
router.use('/admin',adminrouter)

router.use('/news',newRouter)

router.use('/category',categoryrouter)

router.use('/banner',bannerRouter)

module.exports = router;
