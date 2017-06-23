const {User}  = require('../config/dbConnection');

const createUser = (username , mobileNumber , email , password , confirmPassword) => {
    return User
                .create({
                    username:username,
                    mobileNumber:mobileNumber,
                    email:email,
                    password:password,
                    confirmPassword:confirmPassword
                })
}

module.exports ={
    createUser
}