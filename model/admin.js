
const mongoose = require('mongoose')

const adminUserData = mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:String,
    avatar:String,
    nickName:String,
    desc:String,
    job:Number,
    sex:Number,
    age:Number

},{
    versionKey:false
},
{
    timstemps:{
        createdAt: 'createdTime',
        updatedAt: 'updateTime'
    }
})

module.exports = mongoose.model('admins',adminUserData)


















