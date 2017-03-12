var single=function() {
	return this;
};
single.prototype = {
	times: 0,
	hello: function(first_argument) {
		console.log("times:" + this.times++);
	}
}
var singleOne=new single()
module.exports=singleOne;
