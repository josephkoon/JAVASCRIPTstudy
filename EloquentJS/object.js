//head first javascript programming

//functions are first class values
//you can assign a function to a variable
//store a function as an array
//pass a function to a function
//return a function to a function

//Objects
//objects : math, date, json, window, document, created objects,
//arrays and functions are objects


//array is an object
var flavors ['blah','blah'];
flavors.push('pistachio');
flavors.length;

//add a new property without an index
//array positions are properties
flavors.store= 'Webville Iced Creamery';

for(var prop in flavors){
	console.log(flavors[prop])
}



//function is an object
function add2nums(x,y){
	return x+y;
}
var result = add2nums(2,3);
console.log(result);


//create function as an object
var add2nums = new Function('x','y','return x+y')
add2nums(2,3); //get back 5



//other objets
var age = 4;
var isMitt = false;
var name = 'Fido'.length 

//strings are objects
//string gets converted to an object
var phoneNumber = '555-1212'
phoneNumber.length
phoneNumber.substring(0,3)




//constructor prototype chain
function ShowDog(name,breed,weight,handler){
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.handler = handler;
}
ShowDog.prototype = new Dog(); //prototype chain
 







