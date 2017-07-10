'use strict';
var Sequelize = require('sequelize');
require('dotenv').config();

var sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host:process.env.DB_HOST,
        dialect:'mysql'
    }
);

const db = {
    Sequelize,
    sequelize
};

db.User = require('../models/schema/User.js')(sequelize,Sequelize);

module.exports = db;