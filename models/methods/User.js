const {User}  = require('../../config/dbConnection');

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


const findUserByEmail = (email) => {
    return User.findAll({where:{email}})
};

const findUserByID = (id) => {
    return User.findAll({
        attributes:[
                        'username', 
                        'mobileNumber',
                        'email',
                        'terms'
                    ],
        where:{userID:id}
    })
};

module.exports = {
    createUser,
    findUserByEmail,
    findUserByID    
}