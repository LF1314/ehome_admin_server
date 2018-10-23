



const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ehomeAdmin',{ useNewUrlParser: true })

const mongss = mongoose.connection;
mongss.on('error', console.error.bind(console, 'connection error:'));
mongss.once('open', function() {
 console.log('connect mongose succcess!')
});










