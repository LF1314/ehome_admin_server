var express = require('express');
var router = express.Router();
var auth = require ('../control/demoauth.js')
const interdatas = require('../model/intervction')

//添加互动内容

router.post("/add",auth,async(req,res,next)=>{
    let{
        content ,
        currentTime,
        userId
    } = req.body
    try {
        console.log(content,userId)
        const interdata = await interdatas.create({
             content,
             userId,
             currentTime
        })
        

        res.json({
            code:200,
            msg:"发布成功！",
            data:interdata
        })
        
    } catch (error) {
        res.json({
            code:400,
            msg:error
        })
    }
})

router.get('/',async(req,res,next)=>{
    let{pn = 1,size = 10} =req.query
    pn = parseInt(pn)
    size = parseInt(size)
 
    try {
        const interlist = await interdatas.find()
        .skip((pn-1)*size)
        .limit(size)
        .populate({
            path:"userId",
            select:('userName avurl')
        })
        res.json({
            code:200,
            msg:'success',
            data:interlist
        })
        
        
    } catch (error) {
        next(error)
    }
})

module.exports = router