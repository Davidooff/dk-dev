const configDb = require('./config/config-db')


        
function saveCall(body){
    let user = new configDb.CallMeUser(req.body);
    user.save();
}
module.exports.saveCall = saveCall;
