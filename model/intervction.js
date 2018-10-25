const mongoose = require('mongoose')


const interData = mongoose.Schema({
content:{
    type:String

}
,
userId:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'users'
},
commonts:{
    type:Array
},
currentTime:String
}
,
{
    versionKey:false
},
{
    timstemps:{
        createdAt: 'createdTime',
        updatedAt: 'updateTime'
    }
})
const interModel = mongoose.model('inters',interData)
module.exports = interModel









