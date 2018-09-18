let numbers = [];
let even = [2,4,6,8];

for (let i = 0; i < even.length; i++) {
	console.log(even[i]);
}

let countries = [];
countries["India"] = "New Delhi";
countries["Spain"] = "Madrid";
countries["UK"] = "London";

for(let item in countries){
	console.log(item + ": " + countries[item]);
}
