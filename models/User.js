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
        type:Sequelize.INTEGER.UNSIGNED,
        unique:true,
        allowNull:false,
        validate:{
           isInt:{
               msg:"Please enter a valid number"
           },
           len:{
               args:[10,15],
               msg:"Min length of the phone number is 10"
           }
        }
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
        type:Sequelize.STRING,
        validate:{
            len:{
               args:[8,16],
               msg:"your password min length is 8 and max length is 16"
           }
        }
    },
    terms:{
        type:Sequelize.ENUM,
        values:['Yes','No']
    }
} , {version:true});
    return User;
}