//Dynamically typed
//var is function scoped
//let is block scoped

function scope(){
	var i = 10;
	const pi = 3.14;
	if(i === 10){
		 var message = "i is 10";
		//let message = "i is 10";
	}
	pi = 3.14156;
	console.log(message);
}
scope();


// var i = 10;
// var j = "string";
// j = true;
// j = 12.345;