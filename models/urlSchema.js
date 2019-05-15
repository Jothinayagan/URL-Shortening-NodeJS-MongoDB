var mon = require('mongoose');
var Schema = mon.Schema;
var muv = require('mongoose-unique-validator');
//var validate = require('mongoose-validator');
//const format = require('node.date-time');

var url = new Schema({
    _id: {
        type: Number,
        index:true, 
        required: true
    },
    orgurl: { 
        type: String, 
        required: true 
    },
    shorturl: {
        type: String, 
        required: true
    },
    date: Date
});

//validate or throw err if not unique/valid
url.plugin(muv);

//export models
module.exports = mongoose.model('dbname', urlschema);