//keep track of 'this'
//RULES 
//in global code, this refers to the window or global
//in a function this refers to global, unless you call it as a method or use call()/apply
//when you call an object method, this is the object whos method you called
//when you call a constructor function, new creates a new object as this
//when you use call() method, this is the value that is supplied into call

//this in a global variable is the Window browser or Node
var numBananas = 4;
console.log(this.numBananas); //refers to bananas


//inside a function, this is still global
var bananas = 0;
function add(){
	console.log(this.bananas) //still works
}


//this in an object method
//when you call the method, this is set to the object called
var gorilla = {
	hasBanana : false,
	eat: function(bananas){
		if(bananas)>0 {
			this.hasBanana = true;
		}
	}
};
//sets this to gorilla
gorrilla.eat();



//this in a constructor function
function Gorilla() {
	console.log(this); //logs Gorrilla{}
	this.numbananas = 50
	this.eat = function()

	console.log(this) //logs Gorrilla{age:50}
}

//new changes the global object
var koko = new Gorrilla()
koko.eat(3) // >>koko object is this

//feed a new variable into a function as 'gorilla' so this works
function notifyEating(gorilla){
	if(gorilla.eat){
		alert('the gorilla is eating bananas')
	}
}


//Pass function into object refers this to the button
window.onload = function() {
	var button = document.getElementById('button');
	button.onclick = addBanana;
	button.onclick = function(){addBanana(this)};
	button.onclick = function(){addBanana.call(this)};
}
//add banana is called as a property of the button class
//this refers to the button - not the window
//you cannot call it as addBanana()
function addBanana(button) {
	numBananas ++;
	this.innerHTML = 'add a banana'







