//variables declared with var are local - without var they are global
var x = 'outside'
var f1 = function(){
	var x = 'inside f1';
};
f1();
console.log(x) //returns outside the scope

//FUNCTIONS CREATE A NEW SCOPE NOT BRACES
//nested scope. degrees o locality  can share result. cant share count
var landscape = function(){
	var result = '';

	var flat = function(size){
		for(var count=0; count<size; count++){
			result += '_';
		}
	};

	var mountain = function(size){
		result += '/';
		for(var count=0; count<size; count++){
			result += "'";
		}
		result += '\\'
	};
	flat(3);
  	mountain(4);
  	flat(6);
  	mountain(1);
  	flat(1);
  	return result;
}



