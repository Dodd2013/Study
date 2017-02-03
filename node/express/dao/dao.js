var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports={
	users:sequelize.define('user',require('../models/user.js') , {freezeTableName: true})
}