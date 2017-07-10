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
                })
}


const findUserByEmail = email => User.findAll({where:{email}})


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

const checkUserStatus = userID => {
    return User.findAll({
            attributes:['status'],
            where:{userID}
    }).then(u =>u[0].dataValues.status);
};


module.exports = {
    createUser,
    findUserByEmail,
    findUserByID,
    checkUserStatus
}