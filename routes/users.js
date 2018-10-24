var express = require('express');
var router = express.Router();
var auth = require ('../control/auth.js')
const adminUserData = require('../model/admin')
/* GET users listing. */
//登陆接口
router.post('/login', async(req, res, next) =>{ 
  const {userName,password} = req.body
    if(userName && password){
        try {
         const usedata =   await adminUserData.findOne({
             userName
           })
          if(usedata && usedata.userName){
            if(usedata.password == password){
              req.session.user = usedata
              res.json({
                code:200,
                msg:'登陆成功'
              })
            }else{
              res.json({
                code:400,
                msg:'密码错误'
              })
            }
          }else{
            res.json({
              code:401,
              msg:'用户不存在'
            })
          }
          
        } catch (error) {
          next(error)
        }
    }
    else{
      res.json({
        code:401,
        msg:"用户名密码必填"
      })
    }
});
//注册接口 需要 有登陆状态才可以注册
router.post('/singup',auth,async(req,res,next)=>{
  let {
    userName,
    password,
    nickName,
    desc,
    job,
    sex,
    age,
    phone,
    avatar
  } = req.body
  try {
    const data = await adminUserData.create({
      userName,
      password,
      nickName,
      desc,
      job,
      sex,
      age,
      phone,
      avatar
    })
    res.json({
      code:200,
      msg:'注册成功',
      data
    }) 
  } catch (error) {
    res.json({
      code:401,
      msg:"缺少必要参数"
    })
  }
})
//获取管理员列表
router.get('/',auth,async(req,res ,next)=>{

   let {pn = 1, size = 10} = req.query
       pn  = parseInt(pn)
       size = parseInt(size)
   try {

     let admins = await adminUserData.find()
      .skip((pn - 1) * size)
      .limit(size)
      .select('-password')
      .sort({_id:-1})
      res.json({
        code:200,
        msg:'success',
        admins
      })
     
   } catch (error) {
     next(error)
   }
})
//获取管理员信息
router.get('/info',auth,async(req,res,next)=>{
  
   let {userName} = req.query
   console.log(userName)
   try {
        const userinfo  =  await adminUserData.findOne({userName})
        .select('-password')
        res.json({
          code:200,
          msg:'获取管理员信息成功',
          userinfo
        })
   } catch (error) {  
   }
})
//退出登录接口
router.get('/logout',(req,res,next)=>{
  req.session.user = null
  res.json({
    code:200,
    msg:'退出登录成功！'
  })
})
//删除管理员
router.delete('/del',auth,async(req,res,next)=>{
  let { id } = req.query
   try {
     console.log(id)
        const data = await adminUserData.findByIdAndRemove(id)
        res.json({
          code:200,
          msg:'删除成功'
        })
   } catch (error) {
     res.json({
       code:400,
       msh:'删除失败'
     })
   }
})
module.exports = router;
