const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://developer:dbpasons97@yelpcamp-ezsoo.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');