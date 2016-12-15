//javascript simplified
//cliff notes

//OBJECT ACCESS WITH ''
var object = {};
obj.color = 'black' ; //expands into dot access
var property = 'color'; //put variable into brackets

obj[property] //alerts 'black'
obj['color'] //alerts 'black'. need to use brackets


var obj = {};
obj['0'] = 'black';
obj[0] = 'black';
obj[0] //alerts black. automatically stringifies


var arr = [];
arr['flavor'] = 'vanilla' //add property at key flavor
arr[0.toString()] = 'black'
arr[0.toString()] //alerts 'black'
arr['length'] //can be accessed like other properties
arr['flavor'] //alerts 'vanilla'


arr.length //valid
object.length //not valid




//FOR LOOP
for(var i=0; i<arr.length; i++){
	console.log(i); //logs 0,1. not interacting with array
};


for(var i in arr){ //collects a list of the keys, iterates over keys
	console.log(i); //logs 0,1,'flavor' goes over all properties
};




//FUNCTION
//functions are objects
var fun = function(){};
fun[0] = 'black', fun[1] = 'blue';
fun['flavor'] = 'vanilla';
fun[0] //'black'
fun['flavor'] //'vanilla'


for (var i in fun){
	console.log(i); //logs 0, 1, vanilla. finds all properties	
}

fun('hi') //alerts 'HI' 

function(input){alert(input.toUpperCase())}('hi') //alerts 'HI'
//cannot get alert(fun.input)




//pass function as a callback with a delay
setTimeout(fun(),1000) // not right
setTimeout(fun,1000) //good
setTimeout(function(){fun();},1000) //runs with anonymouse function. can pass argument

//undefined is a value




//SCOPES
//data store where variables hold values. key value pairs
//

//CLOSURE
//scope that remains available to any functions created within that scope



