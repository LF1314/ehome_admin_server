var express = require('express');
var router = express.Router();
const newRouter = require('./news')
const adminrouter = require('./users')
const categoryrouter = require('./category')
const bannerRouter = require ('./banner.js')
//添加互动
const  interRouter = require('./intervtion')
//添加评论
const commentRouter = require('./comment')
// 移动端路由
const demoLoginRouter = require('../democontrol/login')
const demonewRouter = require('../democontrol/new')
const userdemoRouter = require('../democontrol/user')
//跳转管理员

const adminindex = require('../routes/ehomeadmin')

/* GET home page. */
// 后台管理员api
router.use('/',adminindex)
router.use('/admin',adminrouter)
//新闻api
router.use('/news',newRouter)
//新闻分类api
router.use('/category',categoryrouter)
//轮播图api
router.use('/banner',bannerRouter)
//添加互动api
router.use('/inter',interRouter)
//添加评论
router.use('/comment',commentRouter)


//移动端接口
//移动端登陆
router.use('/demo',demoLoginRouter)
//移动端获取新闻
router.use('/demonew',demonewRouter)
//移动端用户管理
router.use('/demouser',userdemoRouter)

module.exports = router;
