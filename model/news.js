//新闻模型

const mongoose = require('mongoose')

const newsData = mongoose.Schema({
   title:String,
   content:String,
   contentext:String,
   newimg:String,
   type:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'category'
   },
   author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'admins'
   }

},{
    versionKey:false
},
{
    timstemps:{
        createdAt: 'createdTime',
        updatedAt: 'updateTime'
    }
})

module.exports = mongoose.model('news',newsData)


















