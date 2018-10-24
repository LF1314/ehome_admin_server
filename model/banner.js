const mongoose = require('mongoose')
const bannerData = mongoose.Schema({
    imgUrl:String,
    newId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'news'
    },
    title:String,
    type:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    },
    status:{
        type:String,
        default:'1'
    },
    index:{
        type:Number,
        default:1
    }

},{
    versionKey:false
},
{
    timstemps:{
        createdAt: 'createTime',
        updatedAt: 'updateTime'
    }
})
module.exports = mongoose.model('baners',bannerData)


















