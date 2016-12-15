//immediately invoked functions
//self executing anonymous function
//self invoked anonymous function


//function
(function(i){
	return i+1;
})(j) //pass any argument

!function(){}();
~function(){}();


//jquery 
(function($){
	$(this).addClass('MyClass');
})(window.JQuery)


//call function immediately
(function(val){
	return val+5
})(3)


//simple javascript library
var count = (function(){
	'use strict';
	var i=0;
	return {
		get:function(){ return i},
		set:function(val){ i=val;},
		increment: function(){ i++; }
	}
})();

count.set(5);
count.increment();
console.log(count.get());


//simple javascript IIFE
//automatically returns the function but does not call it
var func = (function(){
	return {
		get:function(){return 5}
	}
})
func.get() //call the internal function



//create a module
var funct2 = (function(w,d){
	return {
		get:function(){return w+d}
	}
})(5,6); //arguments to be used







//TEST FUNCTION 1 HOISTING
var val = myFunct(5);
function myFunct(y){ return console.log(y*y) };


//TEST FUNCTIN 2 SELF INVOKING TIMER
(function foo(){
 	console.log('Hello There');
	setTimeout(foo, 1000);
})();


//TEST FUNCTION 3 
!function(foo) { console.log('test', foo); }('first');
!function(foo) { console.log('test: ', foo+1); }(5);



//TEST FUNCTION 4 SELF CALLING
(function(){
	console.log('Hello There');
})();



//TEST FUNCTION 5 CALL DELAYED FUNCTION
function thinkBeforeSpeaking(index) {
  setTimeout(function () {
    console.log(index);
  }, 10000);
  // 4 ms isn't a lot, but it's more than I usually take
}

for (var i = 0; i < 10; i += 1) {
  thinkBeforeSpeaking(i);
}