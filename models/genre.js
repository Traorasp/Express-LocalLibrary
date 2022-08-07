var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookGenreSchema = new Schema({
    name: {type: String, minLength: 3, maxLength: 100, required: true}
})

BookGenreSchema
.virtual('url')
.get(function() {
    return '/catalog/genre/' + this._id
})

module.exports = mongoose.model('Genre', BookGenreSchema)