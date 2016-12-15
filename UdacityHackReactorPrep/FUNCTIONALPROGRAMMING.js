//CALLBACK

var friends = ['mike','stacy','andy','rick'];

friends.forEach( function(eachName, index){
	console.log(index + 1 + '.' + eachName);
})

//friends becomes each name, index is the number
var numbers = [1,2,3,4,5];

numbers.forEach( function(number,index){
	console.log(number+1+ ':' + index)
})



//named or anonymous functions
var userData = [];

function logStuff(userData){
	if(typeof userData === 'string'){
		console.log(userData);
	}
	else if (typeof userData ==='object'){
		for(var item in userData){
			console.log(item + ':' + userData[item])
		}
	}
}

function getInput (options, callback){
	userData.push(options);
	callback(options);
}

getInput({name:'Rich',speciality:'JavaScript'},logStuff);





//make your own callback function

// function poemMaker(name,gender){
// 	console.log(name + ' is finer than wine.');
// 	console.log('A '+gender+'of unfortunate tragedies');
// }

// function getInput(firstName, lastName, gender, callback){
// 	var fullName = firstName + ' '+ lastName;

// 	callback(fullName);
// }

// getInput('Michael','Fred','Woman',poemMaker)




//more example
function greetUser(name, sex){
	var salutation = sex && sex === 'Man' ? 'Mr' : 'Ms';
	console.log('Hello '+salutation+" "+name);
}

getInput('bill','gates','man',greetUser);



