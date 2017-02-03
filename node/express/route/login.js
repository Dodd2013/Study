var express = require('express');
var router = express.Router();
var dao = require('../dao/dao.js');
var users=dao.users;
router.get('/:id', function(req, res, next) {
    users.sync().then(function() {
    	return users.findOne({where:{email:req.params.id}});
    }).then(function(obj) {
    	res.jsonp(obj);
    });
});
router.post('/',function(req,res) {
	
})
router.put('/',function() {
	users.sync().then(function(req,res) {
        // Table created
        return users.create({
            firstName: 'John',
            lastName: 'Hancock'
        });
    });
});
module.exports = router;
