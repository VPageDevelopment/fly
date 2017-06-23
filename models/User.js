module.exports = (sequelize , Sequelize) => {
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
        unique:true,
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
    confirmPassword:{
        type:Sequelize.STRING
    }
} , {version:true});
    return User;
}
