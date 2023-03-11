const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://127.0.0.1:27017/dkzaune');

const userSchema = new Schema({ 
    name: String,
    email: String,
    tell: String,
    text: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    processed: Boolean
}, 
{
    statics: {
        getArrayOfUsersByDate(startFrom, quantity) {
            return this.find({}).sort('-date').skip(startFrom).limit(quantity);
        }
    }
})

const CallMeUser = mongoose.model('call-me-users', userSchema);

module.exports.mongoose = mongoose;
module.exports.CallMeUser = CallMeUser;