'use strict';
module.exports = (sequelize , Sequelize) => {
const User = sequelize.define('user',{
    userID:{
        type:Sequelize.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            isAlpha:{
                args:true,
                msg:"User name should contain only letter"
            }
        }
    },
    mobileNumber:{
        type:Sequelize.BIGINT,
        unique:true,
        allowNull:false,
        validate:{
           not:{
               args:["[a-z]",'i'],
               msg:"Please enter a valid number"
           },
           len:{
               args:[10,20],
               msg:"Min length of the phone number is 10"
           }
        }
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        validate:{
            isEmail:{
                msg:"Please enter a valid email"
            }
        }
    },
    password:{
        type:Sequelize.STRING,
        validate:{
            len:{
               args:[8,100],
               msg:"your password min length is 8"
           }
        }
    },
    terms:{
        type:Sequelize.ENUM,
        values:['Yes','No']
    },
    emailToken:{
        type:Sequelize.STRING
    },
    status:{
        type:Sequelize.ENUM,
        values:['active','inactive'],
        allowNull:false,
        defaultValue:'inactive',
    }
} , {version:true});
    return User;
}