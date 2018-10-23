var express = require('express');
var router = express.Router();
var auth = require ('../control/auth.js')
const categorydatas = require('../model/category')

router.post('/',
async(req,res,next)=>{
    let{ category } = req.body
    try {
     const data = await categorydatas.create({
        category
     })
 
     res.json({
         code:200,
         msg:'success',
         data
     })
    } catch (error) {
        next(error)
    } 
 })

router.get('/',async(req,res,next)=>{

   try {
    const category = await categorydatas.find()

    res.json({
        code:200,
        msg:'success',
        category
    })
   } catch (error) {
       next(error)
   } 
})

module.exports = router