//create a base Person. creates a prototype
var Person = function(name){
	this.name = name; //create an attribute from variable
};

//creates an add function
Person.prototype.add = function(input1,input2){
	return input1+input2
}

//overwrites the name attribute
Person.prototype.changename = function(input1,input2){
	this.name = "freddy"
}


//create an instance
var john = new Person("john")
var fred = new Person("fred")

console.log(john.name)
console.log(john.add(1,2))
john.changename()
console.log(john.name)




