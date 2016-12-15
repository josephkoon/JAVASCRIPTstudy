//prototype inheritance vs classical inheritance

//constructor
function Person(name){
	this.name = name
}


//add the method to the prototype
Person.prototype.sayHi = function(){
	console.log("Hi, my name is "+this.name)
}


//create an instance
bob = new Person('Bob')



//object ineheritance
function object(o){
	function F(){};
	F.prototype = o;
	return new F()
}