let numbers = [1,2,3,4,5,6];
/*
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}
*/

numbers.forEach((num) => console.log(num));

let i = 10;

/*
let eat = function(item){
	console.log(`Eating ${item}`);
}
*/

let eat = (item) => console.log(`Eating ${item}`);

eat('Rice');

function doSomething(fn){
	fn();
}
let sleep = () => console.log("Sleeping");

doSomething(sleep);
doSomething(() => console.log('Really scratching my head now'));