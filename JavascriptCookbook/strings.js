//concatenating
var string1 = "This is a ";
var string2 = "test";
var stringResult = string1 + " " = string2;

//concatenating a string and another data type
var numValue = 23.45;
var total = "and te total is " + numValue;

//conditionally comparing strings
var strName = prompt("What's your name?");
if (strName =="Shelley"){
	alert("Your name is shelley! good for you")
}
else{
	alert("your name isn't shelley, bummer")
}

//finding a substring
var testVaue = "This is the Cookbook's test string";
var subsValue = "Cookbook";
var iValue = testValue.indexOf(subsValue); //returns index of substring

//extracting a substring from a string
var sentence = "This is one sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas";
var start = sentene.indexOf(":");
var end = sentence.indexOf(".", start+1)
var list = sentence.substring(start+1, end);

//checking for an existing, nonempty string
if(((typeOf unknownVariable != "undefined")&& typeOf unknownVariable.valueOf() == "string")) $$ (unknownVariable.length>0){
}

//inserting special characters
var resultString = document.getElementById("result"); //get the element
var blk = document.getElementById("result");
blk.innerHTML = resultString; //add the resultString to the blk

//processing individual lines of a textarea
var txtBox = document.getElementById("inputbox"); //get the text box element
var lines = txtBox.value.split("\n"); //split the text box value into lines at new line

//trimming whitespace from ends of a string
var txtBox = document.getElementById("test"); //get text box element
var lines = txtBox.value.split("\n"); //split the value on new lines
var resultString = ""; //set result to ""
for (var i=0; i<lines.length;i++){
	var string = lines[i].trim();
	resultString += string + "-";
};

//left or right pad a string
var prefLineLength = 20;
var oldStr = "This is a string"
var diff = prefLineLength - oldStr.length
var filler = '&nbsp;';
for (var i=0; i<diff; i++){
	oldStr = filler + oldStr;
}
document.getElementById("result").innerHTML=oldStr;





