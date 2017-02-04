var express = require('express');
var router = express.Router();
var dao = require('../dao/dao.js');
var user=dao.user;
router.get('/:id', function(req, res, next) {
    user.sync().then(function() {
    	return user.findOne({where:{email:req.params.id}});
    }).then(function(obj) {
    	res.jsonp(obj);
    });
});
router.post('/',function(req,res) {
	
})
router.put('/',function() {
	user.sync().then(function(req,res) {
        // Table created
        return user.create({
            firstName: 'John',
            lastName: 'Hancock'
        });
    });
});
module.exports = router;
