const express = require('express')
const router = express.Router()
const auth = require('../control/auth')
const commentdata = require('../model/comment')
const interdata = require('../model/intervction')
//添加评论
router.post('/add',auth,async(req,res,next)=>{
    let{
        interId,
        comments,
    } =req.body
    let userId = req.session.user._id
    try {
        const commentda = await commentdata.create({
            interId,
            comments,
            userId
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
        const commentlsit = await commentdata.find({interId:id})
        .populate({
            path:'userId',
            select:('-password')
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