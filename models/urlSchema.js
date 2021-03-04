const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const muv = require('mongoose-unique-validator');

const urlSchema = new Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        required: true
    }
});

//validate or throw err if not unique/valid
urlSchema.plugin(muv);

//export models
module.exports = mongoose.model('dbname', urlSchema);