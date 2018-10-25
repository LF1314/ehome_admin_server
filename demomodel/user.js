//党建一家移动端用户信息
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var userdata = new mongoose.Schema({
    avurl:String,
    adress:String,
    age:Number,
    birthday:String,
    branchName:String,
    leaderson:String,
    phone:String,
    qqNum:String,
    salery:Number,
    nation:String,
    sex:Number,
    hometown:String,
    wxnum:String,
    jobrank:String,
    education:String,
    pass:String,
    username:String,
    partyIdentity:String,
    idcard:{
        type:String,
        unique:true,
        required:true,
    },

    totalscore:{
        type:Number,
        default:0
    }

},
{
    timstemps:{
        createdAt: 'createdTime',
        updatedAt: 'updateTime'
    }
},
{
    versionKey:false
}
)


const admindata = mongoose.model('users',userdata)

module.exports  = admindata
















