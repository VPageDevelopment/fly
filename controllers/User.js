const {User}  = require('../config/dbConnection');

const createUser = (username,mobileNumber,email,password,terms) => {
    return User
                .create({
                    username:username,
                    mobileNumber:mobileNumber,
                    email:email,
                    password:password,
                    terms:terms
                })
}

module.exports ={
    createUser
}