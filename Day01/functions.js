let i = 10;
let eat = function(item){
	console.log(`Eating ${item}`);
};

eat('Rice');

function doSomething(fn){
	fn();
}
let sleep = function(){ console.log("Sleeping"); };

doSomething(sleep);
doSomething(function(){
	console.log("Scratching my head");
});