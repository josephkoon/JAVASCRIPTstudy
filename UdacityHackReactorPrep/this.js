https://www.youtube.com/watch?v=n2jeKqJt0OA&index=55&list=PLAwxTw4SYaPmRCRPu9EjK-fWSccPwTOnc

//this is misunderstood

//parameters are betwen parantheses
//you bind valus to it differently


//this gets bound to the correct object automatically


var obj = {
	fn : function(a,b){
		console.log(this)
	},
	number:5
};

thing = obj.fn(3,4) //bounds to the object that is called
//this refers to obj




var fn = function(this,one,two){
	log(this,one,two);
};

var r={},g={},b={};

fn(g,b) //logs global object
 
r.method = fn; //the '.' passes this

fn(g,b) //left of the dot will refer to red {} because it was called on the left
r['method'](a,b) //same call as above

fn.call(y,g,b) //custom binding for this. bounds to 'r'
//.call overrides access rules so 'y' gets bound

setTimeout(fn,1000) //call 1 second later

//no values passed. parameters gets undefined
var setTimeout = function(cb,ms){
	wait...
	call fn
}









