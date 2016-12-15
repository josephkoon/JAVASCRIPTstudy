//TEST 1
var person = {
	firstName : 'Penelope',
	lastName : 'Barrymore',
	fullName : function(){
		console.log(this.firstName + ' ' + this.lastName);
	}
}

console.log('TEST 1///')
person.fullName()


//TEST 2
function foo(){ return this.word; }
console.log('\nTEST 2///')
console.log(foo.apply({word:'good bye'})) //applies the object


//TEST 3
var tester = {
	add: function(){return this.a + this.b} //constructor
}
var obj = tester;
obj.a = 1;
obj.b = 5;

console.log('\nTEST 3///')
console.log(obj.add())


//TEST 4
function Gorilla() { //constructor function
	console.log('this is: ',this);
	this.hasBanana = false; 
	this.eat = function(numBananas){
		this.hasBanana = true;
	}
}
var gorilla = new Gorilla(); //creates a new object referring to this


//TEST 5
var gorilla3 = {
	driver : 'net ninja',
	logDriver : function() { console.log('driver name is '+this.driver)}
}
gorilla3.logDriver();
gorilla3.driver = 'yes man'
gorilla3.logDriver();


