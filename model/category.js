const mongoose = require('mongoose')
const categoryData = mongoose.Schema({
  category:String,
},{
    versionKey:false
},
{
    timstemps:{
        createdAt: 'createdTime',
        updatedAt: 'updateTime'
    }
})
module.exports = mongoose.model('category',categoryData)


















