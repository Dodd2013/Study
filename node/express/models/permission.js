var Sequelize = require('sequelize');
module.exports = {
    permissionId:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
	sourceId:{
		type:Sequelize.INTEGER
	},
    permissionName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    actionUrl:{
    	type: Sequelize.STRING,
    	allowNull: true
    },
    relation:{
    	type:Sequelize.ENUM('role', 'owner'),
    	allowNull: false
    }
}
