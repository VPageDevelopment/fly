'use strict';

const {User}  = require('../../config/dbConnection');

const createUser = (username,mobileNumber,email,password,terms,emailToken) => {
    return User.create({
                    username,
                    mobileNumber,
                    email,
                    password,
                    terms,
                    emailToken
                });
}


const findUserByEmail = email => User.findAll({where:{email}});

const findUserByID = (userID) => {
    return User.findAll({
        attributes:[
                        'username',
                        'mobileNumber',
                        'email',
                        'role'
                    ],
        where:{userID}
    })
};

// findUserByID(1).then(u=>console.log(u));

const checkUserStatus = userID => {
    return User.findAll({
            attributes:['status'],
            where:{userID}
    }).then(u => u[0].dataValues.status);
};

const checkActivationKey =  activationKey => {
    return User.findAll({where:{emailToken:activationKey}})
        .then(user => user.updateAttributes({
            status:"active"
        }));    
} 
    
module.exports = {
    createUser,
    findUserByEmail,
    findUserByID,
    checkUserStatus,
    checkActivationKey
}