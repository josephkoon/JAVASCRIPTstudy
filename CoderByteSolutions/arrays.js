var obj = {};

for(var i=0l i<arr.length; i++){
	var key = arr[i].toString();
	var value = doubling(arr[i]);

	obj[key] = value;
}





for(var i=0; i<3; i++){
	setTimeout(function() {alert(i);}, 1000+i);
}



for(var i=0; i<3; i++){
	setTimeout(function(i_local){
		return function() {alert(i_local);}}(i), 1000+i);

}



//CLOSURE
//inner function has access to outer variables
function multiply(a){
	return function(b){
		return a*b;
	}
}

multiply(5)(6);




function fullName(){
	return 'hello this is '+this.first+' '+this.last;
}

console.log(fullname());
var person = {first:'foo',last:'bar'};
console.log(fullName.bind(person)) //hello this is foo bar
//use bind to pass a specific object to a funciton


//AVERAGE
//prototype
Array.prototype.average = function (){
	var sum = this.reduce(function(prev,cur){ return prev+cur;})
	return sum / this.length
}


//CALLBACK
//call function as an input into the function
function modifyArray(arr, callback){
	arr.push(100);
	callback();
}




//PRIVATE VARIABLE
function func(){
	var prive = 'secret code';
}


function func(){
	var priv = 'secret code';
	return function(){
		return priv;
	}
}

var getPrive = func();
console.log(getPrive()) //output secret code


modifyArray(arr, function(){console.log('array has been modified',arr);})