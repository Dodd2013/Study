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
	user:sequelize.define('user',require('../models/user.js') , {freezeTableName: true}),
	permission:{
		role:sequelize.define('permissionRole',require('../models/permissionRole.js') , {freezeTableName: true}),
		permission:sequelize.define('permission',require('../models/permission.js'), {freezeTableName: true}),
		source:sequelize.define('permissionSource',require('../models/permissionSource.js'), {freezeTableName: true})
	}
}