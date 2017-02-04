var dao=require('./dao/dao');

module.exports=function(req,res,next) {
	//res.jsonp({error:"you don't have permission to do this!"});
	next();
};