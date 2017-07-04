const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
       bcrypt.hash(password , saltRounds=10,(err , hash)=> {
            if(err) reject(err);
            resolve(hash);
       });
    });
};


module.exports = {
    hashPassword
}