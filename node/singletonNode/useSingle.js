var single=require("./somethingSingle");
single.hello();
single.hello();
single.hello();
single.hello();
var single1=require("./somethingSingle");
single1.hello();
single1.hello();
single1.hello();
single1.hello();
console.log(single===single1);//true
//这里single1和single是同一个对象
module.exports=single;