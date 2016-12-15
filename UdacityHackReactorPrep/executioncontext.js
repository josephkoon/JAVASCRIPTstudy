//in memory scopes
//built as the code runs


//many in-memory scopes are called for each function



var hero = aHero();

var newSage = function(){
	var foil = aFoil();

	var saga = function(){
		var deed = aDeed();
		log(hero+deed+foil);
	};
	saga();
	saga();
};

newSaga();
newSaga();




var makeArray = function(){
	return [];
};

var array1 = makeArray();
var array2 = makeArray();

array1 != array2