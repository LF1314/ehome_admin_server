//客户端实现登陆控制
//加密方式使用jsonwebtoken控制

const express = require('express')
const router = express.Router()
const adminUserData = require('../model/admin')
const cret = require('./creat')
const jwt = require('jsonwebtoken')
//实现用jwt 生成token

router.post('/login', async(req, res, next) =>{
      
    const {userName,password} = req.body
      if(userName && password){
          try {
           const usedata =   await adminUserData.findOne({
               userName
             })
            if(usedata && usedata.userName){
              if(usedata.password == password){
             const token =  jwt.sign({userId:usedata._id},cret,{expiresIn:60*6})
                res.json({
                  code:200,
                  msg:'登陆成功',
                  token
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





















