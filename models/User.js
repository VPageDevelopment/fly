
const { Sequelize , sequelize } = require('../config/dbConnection');


const User = sequelize.define('user' , {
    userID:{
        type:Sequelize.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    username:{
        type:Sequelize.STRING
    }
});

User
    .sync()
    .then(()=>User.create({
        username:"vijay"
    }))