//ts 测试
import { cube, foo } from './2';
class People{
	constructor(public name:string,private age) {
		// code...
	}
	sayHello(){
		console.log(`hello ${ this.name }`);
	}
}
let Dodd=new People("Dodd",21);
Dodd.sayHello();
console.log(cube(3)); // 27
console.log(foo); // 4.55580621596288