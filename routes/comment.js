const express = require('express')
const router = express.Router()
const auth = require('../control/demoauth')
const commentdata = require('../model/comment')
const interdata = require('../model/intervction')
//添加评论
router.post('/add',auth,async(req,res,next)=>{
    let{
        interId,
        comments,
        timeFormat,
        userId 
    } =req.body
    try {
        const commentda = await commentdata.create({
            interId,
            comments,
            userId,
            timeFormat
        })
        const inter = await interdata.update({_id:interId},{$push:{commonts:commentda._id}})
       res.json({
           code:200,
           msg:'评论成功1',
           commentda,
           inter
       })
    } catch (error) {
        next(error)
    }
})
//查找评论
router.get('/',async(req,res,next)=>{
    let id = req.query.id
    try {
        const intdata = await interdata.findById(id)
        .populate({
            path:'userId',
            select:('userName avurl')
        })

        const commentlsit = await commentdata.find({interId:id})
        .populate({
            path:'userId',
            select:('userName avurl')
        })
        res.json({
            code:200,
            msg:'success',
            inter:intdata,
            data:commentlsit
        })
    } catch (error) {
        next(error)
    }
})
module.exports =router