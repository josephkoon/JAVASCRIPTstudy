//create base object
var Employee = function(name){
	this.name = name
}

//create getName method in employee
Employee.prototype.getName = function(){
	return this.name
}

Employee.prototype.add = function(input1,input2){
	return input1+input2
}

//create permanent employee base object
var PermanentEmployee = function(annualSalary){
	this.annualSalary = annualSalary
}

//create an instance of employee with the name 'mark'
var employee = new Employee()

//permanentemployee inherits employee
PermanentEmployee.prototype = employee;

//inherit method. create an instance of fred and call the Employee method on it
var fred = new PermanentEmployee('fred')
fred.name = 'fred'
console.log(fred.getName())
console.log(fred.add(1,2))

//check if property is inside the object or its constructor
console.log(employee.hasOwnProperty('name'))

