

//SCOPE AND CLOSURE

//write functions that return objects with methods on them
//functions stored as property of the object
//anytime you see a function with a static input parameter
//anytime you have a static input, thats an opportunity to refactor your code
//you can store the variable in an outer scope

//inner function will always have access to outer scope varialble
//even after the outer function returns



//every function has access to all the scopes around it
//a closure remains available after the outerscopes have returned

//keep a refernce to each of the saga functions to use later

//pass to setTimeout
//return saga from NewSaga
//save saga to global variable

var sagas = [];
var hero = aHero();

var newSaga = function(){
	var foil = aFoil();

	//store the function into the array
	sagas.push(function(){
		var deed = aDeed();
		log(hero+deed+foil);
	});

};

//these saga arrays use the initial hero and foil
//they have custom deeds
newSaga();
saga[function(){}...](); //execute function in the array
saga[0]();


newSaga() //creates a new foil
sagas[0]() //references the original foil with a new deed
sagas[1]() //references the second foil with a new deed
sagas[0]() //uses the first function call



