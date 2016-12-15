//TEST 1 CALLBACK WITH NAMED PASSED FUNCTION
function some_function(arg1,arg2,callback){
	var number = Math.ceil(Math.random()*(arg1-arg2)+arg2);
	callback(number)
}

//apply this function to be executed inside the other one
function numberadd(num){
	console.log('callback '+num)

}

console.log('TEST FUNCTION 1//')
some_function(5,15,numberadd)
some_function(5,15,function numberadd(num){
	console.log('callback '+num)
})





//TEST2 CALLBACK WITH 2 VARIABLES
function anotherFunction(string1,string2,callback2){
	string1 += ' yes hello';
	string2 += ' no goodbye';
	callback2(string1,string2)
}

function caller(string1,string2){
	string1 = string1 + " "+ string2
	console.log(string1);
	
}

console.log('\nTEST FUNCTION 2//')
anotherFunction('fred','john',caller)



//TEST 3 CALL BACK SEPERATE
function poemMaker (name, gender){
	console.log(name+ ' hello there')
	console.log(gender + ' is cool');
}

function getInput(firstname, lastname, gender, callback3){
	var fullname = firstname +" "+ lastname;
	callback3(fullname, gender);
}

console.log('\nTEST FUNCTION 3//')
getInput('fred','john','male',poemMaker)




//TEST 4 CALLBACK IN VARIABLE
function fullName (firstname, lastname, callback){
	console.log('my name is '+firstname+' '+lastname);
	callback(lastname);
}

var greeting = function(ln){
	console.log('welcome mr. '+ln)
}

console.log('\nTEST FUNCTION 4//')
fullName('jackie','chan',greeting);


//TEST 5 ANONYMOUS CALLBACK
function fullName2(firstname, lastname, callback){
	console.log('my name is '+firstname+" "+lastname);
	callback(lastname)
}

console.log('\nTEST FUNCTION 5//')
fullName2('jackie','chan',function(ln){console.log('welcome mr. '+ln)});



//TEST 6 GENERALIED FUNCTION AS CALLBACK 
function publish(item,author,callback){
	console.log(item);
	var date = new Date();
	callback(author,date);
}

function messages(author,time){
	var sendTime = time.toLocaleTimeString();
	console.log('sent from '+author+' at '+sendTime);
}

function articles(author,date){
	var pubDate = date.toDateString();
	console.log('Written by '+author);
	console.log('Published '+pubDate)
}

console.log('\nTEST FUNCTION 6//')
publish('how are you?','monique',messages);
console.log('///')
publish('10 tips for JS Developers','Jane Doe',articles);


//TEST 7 FILTER CALLBACK
var original = [1,8,7,2,14,3,5];
var filtered = original.filter(function(num){ return num%2==0;});
var filtered2 = original.filter(function(num){ return num%2!=0;});
console.log('\nTEST FUNCTION 7//')
console.log(filtered)
console.log(filtered2)

//TEST 8 FILTER CALLBACK 2
function smallNumFilter(num) {return num<5}; //filter
function bigNumFilter(num) {return num>=5}; //filter

var filterFunction
if(setting = true){
	filterFunction = smallNumFilter;
} else {
	filterFunction = bigNumFilter;
}

var setting = false
var arr = [1,8,7,2,14,3];
var filtered = arr.filter(filterFunction);
console.log('\nTEST FUNCTION 8//')
console.log(filtered)


//TEST 9 OPTIONAL CALLBACK
function mySandwich(param1, param2){
	console.log('eating my sandwich '+param1+' '+param2);
	// if(callback){
	// 	callback();
	// }
}

console.log('\nTEST FUNCTION 9//')
var sandwich = mySandwich('ham','cheese');
console.log(sandwich);


//TEST 10 MAP
var numbers =[1,2,3,4,5].map(Math.sqrt);
console.log('\nTEST FUNCTION 10//')
console.log(numbers)

var numbers2 = [1,4,9];
var doubles = numbers2.map(function(num){
	return num**2;
})
console.log(doubles);

//TEST 11 MAP AND FILTER
var numbers3 = [1,2,3,4,34039,2039203,232323,191];
var newNumbers = numbers3.filter(function(number){ return number%2!==0}).map(function(number){ return number*2})

console.log('\nTEST FUNCTION 11//')
console.log('the doubled and odd numbers are',newNumbers);


//TEST 12 INDEX OUTPUT
var numbers4 = [1,1,1,1,1,1,1,1];
var newNumbers2 = numbers4.map(function(number,index){ return index+": "+number})
console.log('\nTEST FUNCTION 12//')
console.log(newNumbers2)


//TEST 13 REDUCE
//applies from left to right into a single value
var arr2 = [[1,2],[3,4],[5,6]];
var flatten = arr2.reduce(function(a,b,index){ return a.concat(b)})
var flatten2 = arr2.reduce(function(a,b,index){ return b.concat(a)}) //do it backwards
console.log('\nTEST FUNCTION 13//')
console.log(flatten)
console.log(flatten2)






