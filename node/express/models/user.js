var Sequelize = require('sequelize');
module.exports = {
	email:{
		type:Sequelize.STRING,
		primaryKey: true,
		validate: {isEmail: true}
	},
    nickName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    trueName:{
    	type: Sequelize.STRING,
    	allowNull: true
    },
    passWord:{
    	type:Sequelize.STRING,
    	allowNull: false
    }
}
