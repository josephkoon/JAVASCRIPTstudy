//DESIGN PATTERNS
//https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailflyweight

//creational design pattern : handling object creation.
//structural design pattern : object compoistion. change one part of system
//behavioral design pattern : steamline communication between disparate objects



//CONSTRUCTOR
//create specific types of objects prepared for use
var newObject = {}
var newObject = Object.create(Object.prototype);
var newObject = new Object();

//set properties
var defineProp = function(obj,key,value){
	var config = {
		value:value,
		writeable:true,
		enumerable:true,
		configurable:true
	}
	Object.defineProperty(obj,key,config)
}
var person = {};
defineProp(person, 'car','Delorean')

//inherit from constructor
function Car(model,year,miles){
	this.model = model;
	this.year = year;
	this.miles = miles;

	this.toString = function(){
		return this.model + ' has done ' + this.miles + ' miles';
	}
}
var civic = new Car('honda civic', 2009, 20000)

//defining a prototpye method
Car.prototype.toString = function () { return this.model+' has done '+this.miles+' miles'}
civic.toString();



//MODULES
//object literals
var myModule = {
	myProperty: 'somevalue',
	myConfig : { useCaching:true, language:'en'},
	saySomething : function() { console.log('where in the world')},
	reportMyConfig : function() { console.log('caching is: ') + console.log(this.myConfig.useCaching ? 'enabled' : 'disabled')},
	updateMyConfig : function(newConfig) {
		if(typeof newConfig ==='object'){
			this.myConfig = newConfig;
			console.log(this.myConfig.language)
			console.log(this.myConfig.useCaching)
		}
	}
};
myModule.updateMyConfig({language:'fr',useCaching:false})
console.log(myModule.myConfig)
myModule.reportMyConfig();



//a module with private variables
var basketModule = (function(){
	var basket = [];
	function doSomethingPrivate(){};
	return {
		addItem:function(values){ basket.push(values)},
		getItemCount:function(){ return basket.length},
		showBasket:function(){ console.log(basket)},
		doSomething: doSomethingPrivate, //public alias for private
		getTotal:function(){
			var q = this.getItemCount(),
				p=0;
				while(q--){
					p+= basket[q].price
				}
				return p
		}
	}
})();
basketModule.addItem({item:'bread',price:.5});
basketModule.addItem({item:'butter',price:.3});
basketModule.showBasket();
console.log(basketModule.getTotal());


//module import mixins. bring in jQuery or underscore.js in a local alias
//use with Dojo, ExtJS, YUI, jQuery
var myModule = (function(jQ,_){
	function privateMethod(){jQ('.container').html('test')}
	function privateMethod2(){console.log(_.min([10,5,100,2,1000]))}
	return { publicMethod : function(){ privateMethod1(); }};
})(jQuery,_)
myModule.publicMethod();

//module exports. declare global module
var myModule = (function(){
	var module = {}, privateVariable = 'hello world';

	function privateMethod(){};

	module.publicProperty = 'foobar';
	module.publicMethod = function(){ console.log(privateVariale)};

	return module
})();


//REVEALING MODULE. define all functions and variable. return anonymus object
var myRevealingModule = (function(){
	var privateVar = 'ben cherry',
		publicVar = 'hey there';
	function privateFunction(){ console.log('Name: '+privateVar)};
	function publicSetName(strName){ privateVar = strName };
	function publicGetName() { privateFunciton(); }

	//return and reveal functions and properties
	return {
		setName: publicSetName,
		greeting: publicVar,
		getName: publicGetName
	}
})();

//SINGLETON PATTERN






