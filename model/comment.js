//评论模型搭建
const mongoose = require('mongoose')
const commentData = mongoose.Schema({
    interId:
    {
        type:mongoose.SchemaTypes.ObjectId,
        ref:"inters"
    },
    comments:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'users'
    },
    timeFormat:String
},
{
    versionKey:false
},
{
    timstemps:{
        createdAt: 'createdTime',
        updatedAt: 'updateTime'
    }
})
const commentdata = mongoose.model('comments',commentData)
module.exports = commentdata







































