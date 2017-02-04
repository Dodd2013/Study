var Sequelize = require('sequelize');
module.exports = {
	roleName:{
		type:Sequelize.STRING,
        allowNull: false
	},
    permissions:{
        type:Sequelize.STRING
    }
}
