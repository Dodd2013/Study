var Sequelize = require('sequelize');
module.exports = {
	sourceId:{
		type:Sequelize.INTEGER,
		primaryKey: true,
        autoIncrement: true
	},
    sourceName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    permissions:{
    	type: Sequelize.STRING,
    	allowNull: true
    }
}
