//客户端实现登陆控制
//加密方式使用jsonwebtoken控制
const express = require('express')
const router = express.Router()
const UserData = require('../demomodel/user')
const cret = require('./creat')
const jwt = require('jsonwebtoken')
//实现用jwt 生成token
router.post('/login', async(req, res, next) =>{
    const {idcard,pass} = req.body
      if(idcard && pass){
          try {
           let usedata =   await UserData.findOne({
            idcard
             })
            if(usedata && usedata.idcard){
              if(usedata.pass == pass){
             const token =  jwt.sign({userId:usedata._id},cret,{expiresIn:6000*6})
                res.json({
                  code:200,
                  msg:'登陆成功',
                  token,
                  data:usedata
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

  module.exports  = router





















