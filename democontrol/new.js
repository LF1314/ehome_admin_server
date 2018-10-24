var express = require('express');
var router = express.Router();
const newdatas = require('../model/news')
const adminUserData = require('../model/admin')
const cret = require('./creat')
const jwt = require('jsonwebtoken')
router.get('/',(req,res,next)=>{
      console.log(req.query.token)
        const { token } = req.query || req.body || req.Headers
        if(token){
            jwt.verify(token,cret,function(err,decoded){
                if(err){
                    res.json({
                        code:403,
                        msg:'登陆状态失效'
                    })
                    return
                }else{
                  let id = decoded.userId
                  let { pn = 1 ,size = 10} = req.query
                  pn = parseInt(pn)
                  size = parseInt(size)
                  adminUserData.findById(id).then(redatas=>{
                      res.json({
                          code:200,
                          msg:'success',
                          userinfo:redatas
                      })
                  })
                }
            })
        }else{
            res.json({
                code:403,
                msg:'未携带token'
            })
        }
       
       
    
        // try {
        //     const newlist = await newdatas.find()
        //     .skip((pn-1)*size)
        //     .limit(size)
        //     .sort({_id:-1})
        //     .populate({
        //         path:'type'
        //     })
        //     .populate({
        //         path:'author',
        //         select:('-password')
        //     })
    
        //     res.json({
        //         code:200,
        //         msg:'success',
        //         data:newlist
        //     })
            
        // } catch (error) {
        //     next(error)
        // }
  
})
module.exports=router