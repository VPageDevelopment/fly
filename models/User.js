
const { Sequelize , sequelize } = require('../config/dbConnection');


const User = sequelize.define('user' , {
    userID:{
        type:Sequelize.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    mobileNumber:{
        type:Sequelize.BIGINT,
        unique:{
            args:true,
            msg:"Mobile Number is already exist"
        },
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        validate:{
            isEmail:{
                msg:"Please enter a valid email"
            }
        }
    },
    password:{
        type:Sequelize.STRING
    },
    comfirmPassword:{
        type:Sequelize.STRING
    }
} , {version:true});

User
    .sync()
    .then(()=>User.create({
        username:"surendar",
        mobileNumber:9876543210,
        email:"surendar@vpageinc.com",
        password:"surendar",
        comfirmPassword:"surendar"
    }))
    .catch(Sequelize.ValidationError,(err)=>{
        console.log(err.errors[0].message)
    })