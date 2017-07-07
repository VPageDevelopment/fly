const bcrypt = require('bcrypt');
const {findUserByEmail} = require('../models/methods/User');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
       bcrypt.hash(password , saltRounds=10,(err , hash) => {
            if(err) reject(err);
            resolve(hash);
       });
    });
};

const authenticationMiddleware = () => {
    return (req, res, next) => {
        if (req.isAuthenticated()) return next();
        res.redirect('/')
    }
};

const loggedUserMiddleware = () => {
    return (req, res, next) => {
        if (!req.isAuthenticated()) return next();
        res.redirect('/user/dashboard')
    }
};

const comparePassword = (req , email,password,cb) => {
    return findUserByEmail(email)
        .then((user)=>{
            if(user.length === 0){
                    cb(null,false,{ message: 'Incorrect email' })           
            }else{
                const userObj = user[0].dataValues;
                //console.log(userObj);
                bcrypt.compare(password,userObj.password,(err,res)=>{
                    if(res!==true)cb(null,false, {message: 'Incorrect password.'});
                    return cb(null,userObj.userID)
                });
            }
        })
}


module.exports = {
    hashPassword,
    comparePassword,
    authenticationMiddleware,
    loggedUserMiddleware
}