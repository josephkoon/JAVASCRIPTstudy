//lexical scope
//describe regions in source code to refer to a variable by name


//declare every variable with a var inside its scope

//global scope
hero = aHero();
var hero2 

//function creates new lexical scope
var newSage = function(){
	log(hero)
	log(hero2) //good to access
	var foil = aFoil()
	foil2 = aFoil() //add to global scope
};

log(hero)
log(foil) //ERROR






//correctly scoped
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

newSage();
newSaga();



