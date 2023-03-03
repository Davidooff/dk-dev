const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const TELL_REGEXP = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

function checkUserFrom(data){
    if(!data.email){
        return false
      } else if(!EMAIL_REGEXP.test(data.email)){
        return false
      } else if(!data.name){
        return false
      } else if(data.name.length < 2 || (/\d/.test(data.name))){ // /\d/.test(data.name) - search for digts in name by regex
        return false
      } else if(!data.tell){
        return false
      } else if(TELL_REGEXP.test(data.tell)){
        return false
      }
      return true
}

module.exports.checkUserFrom = checkUserFrom;