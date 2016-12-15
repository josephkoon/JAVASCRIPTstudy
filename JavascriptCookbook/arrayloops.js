//looping an array
var mammals = ["4","5","3"]
var animalString = "";
for (var i=0; i<mammals.length; i++){
	animalString += mammals[i] + " ";
}



//create multidimensional array
var multiArray = new Array(3);
for (var i=0; i<multiArray.length; i++){
	multiArray[i] = new Array(3);
}



//create string from array
var fruitArray = ['apple','peach','lemon','lime']
var resultString = fruitArray.join("-");



//sorting an array
var fruitArray = ['strawberry','apple','orange','banana'].
alert(fruitArray.sort());



//store and access values in order
var array = [];
array.push("first") //add
array.push("second") //add
array.shift() //remove from front
array.pop() //remove from back



//search an array
var animals = ["jogn","fred","fruit"];
alert(animals.indexOf("fred")) //returns index of element




//search and remove or replace array element
var animals = ["jogn","fred","fruit"];
animals.splice(animals.indexOf("fred").1) //remove element
animal
s.splice(animals.lastIndexOf("cat"),1,"monkey") //add in "monkey"



//apply function to each array element
var charSets = ["ab","bc","de","fg"];
function replaceElement(element,index,array){
	if(element=="ab") array[index] = "**";
}
charSets.forEach(replaceElement); //apply function to each element of array



//return a new array with a function applied
function convertToHex(element,index,array){
	return element.toString(16);
}
var decArray = [23,255,122,5,16,99];
var hexArray = decArray.map(convertToHex); //apply the function



//creating a filtered array
function removeChars(element,index,array){
	return (element !== "**");
}
var charSet = ["**","bb","cd","**","dd"];
var newArray = charSet.filter(removeChars); //filter with the function



//validating array contents
var elemSet = ["**",123,"aaa","abc","-"];
function testValue (element,index,array){
	var textEXp = /^[a-zA-Z]+$/;
	return textExp.test(element);
}
elemSet.every(textValue); //test the function on the values



//use an associative array to store form elements names and values
var elemArray = new Object();
var elem = document.forms[0].elements[0];
elemArray[elem.id] = elem.value;

for (var key in elemArray){
	str+=key + "," + elemArray[key] +" ";
}
