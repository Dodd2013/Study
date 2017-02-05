var dao = require('./dao.js');
var permission = dao.permission.permission;
var source = dao.permission.source;
Promise.all(
    [
    	source.sync({ force: true }),
        permission.sync({ force: true })
    ]).then(function() {
    	return source.bulkCreate(require('./PermissionSource.json'));
}).then(function() {
	// return permission.bulkCreate(require());
});
