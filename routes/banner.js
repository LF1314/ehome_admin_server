var express = require('express');
var router = express.Router();
var auth = require ('../control/auth.js')
const banerdata = require('../model/banner')
//添加轮播图
router.post('/addbaner',auth, async(req,res,next)=>{
        let{
            imgUrl,
            newId,
            title,
            type,
            status,
            index
        } = req.body
    try {
     let data = await banerdata.create({
            imgUrl,
            newId,
            title,
            type,
            status,
            index
        })
        res.json({
            code:200,
            msg:'添加成功',
            data
        })
        
    } catch (error) {
         next(error)
    }
})
//获取轮播图列表
router.get('/',async(req,res,next)=>{

    let {pn = 1 ,  size = 10} = req.query

    pn = parseInt(pn)
    size = parseInt(size)
    try {
        const data = await banerdata.find()
        .skip((pn-1)*size)
        .limit(size)
        .populate({
            path:'type'
        })
        .populate({
            path:'newId'
        })
        .sort({index:-1,id:-1})
        res.json({
            code:200,
            msg:'success',
            data
        })
        
    } catch (error) {
        res.json({
            code:400,
            msg:'error',
            error
        })
    }
})
//根据id获取轮播图
router.get('/:id',async(req,res,next)=>{
    let { id } = req.params
    try {
        const data = await banerdata.findById(id)
        res.json({
            code:200,
            msg:'success',
            data
        })    
    } catch (error) {
        res.json({
            code:400,
            msg:'error',
            error
        })
    }
})
module.exports = router