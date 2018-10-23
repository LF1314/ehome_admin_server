var express = require('express');
var router = express.Router();
var auth = require ('../control/auth.js')
const newdatas = require('../model/news')
//添加新闻

router.post('/addnew',auth,async(req,res,next)=>{

  const {
    title,
    content,
    contentext,
    newimg,
    type,
    author,
  } = req.body

  try {
      const data = newdatas.create({
        title,
        content,
        contentext,
        newimg,
        type,
        author
      })

      res.json({
          code:200,
          msg:'添加成功！',
          data
      })
      
  } catch (error) {
      next(erroe)
  }

})

//查询新闻

router.get('/',async(req,res,next)=>{

    let { pn = 1 ,size = 10} = req.query
    pn = parseInt(pn)
    size = parseInt(size)

    try {
        const newlist = await newdatas.find()
        .skip((pn-1)*size)
        .limit(size)
        .sort({_id:-1})
        .populate({
            path:'type'
        })
        .populate({
            path:'author',
            select:('-password')
        })

        res.json({
            code:200,
            msg:'success',
            data:newlist
        })
        
    } catch (error) {
        next(error)
    }
})
//按新闻id查询单个新闻

router.get('/onenew',async(req,res,next)=>{


})

//按照分类查找新闻
router.get('/newtype',async(req,res,next)=>{

    let { pn = 1 ,size = 10, type} = req.query
    pn = parseInt(pn)
    size = parseInt(size)

    try {
        const newlist = await newdatas.find({type})
        .skip((pn-1)*size)
        .limit(size)
        .sort({_id:-1})
        .populate({
            path:'type'
        })
        .populate({
            path:'author',
            select:('-password')
        })

        res.json({
            code:200,
            msg:'success',
            data:newlist
        })
        
    } catch (error) {
        next(error)
    }
})

module.exports = router