const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/dkzaune');

const CallMeUser = mongoose.model('call-me-users', { 
    name: String,
    email: String,
    tell: String,
    text: String,
    processed: Boolean
});

module.exports.mongoose = mongoose;
module.exports.CallMeUser = CallMeUser;