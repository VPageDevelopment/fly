const bcrypt = require('bcrypt');
const {findUserByEmail} = require('../models/methods/User');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
       bcrypt.hash(password , saltRounds=10,(err , hash)=> {
            if(err) reject(err);
            resolve(hash);
       });
    });
};

const authenticationMiddleware = () => {
    return (req, res, next) => {
		console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
	    if (req.isAuthenticated()) return next();
	    res.redirect('/')
	}
};

const comparePassword = (email,password,cb) => {
    return findUserByEmail(email)
        .then((user)=>{
            const userObj = user[0].dataValues;
            console.log(userObj);
            bcrypt.compare(password,userObj.password,(err,res)=>{
                if(err) cb(null,false)
                if(res===true) cb(null,userObj.userID)
            });
        });
}


module.exports = {
    hashPassword,
    comparePassword,
    authenticationMiddleware
}