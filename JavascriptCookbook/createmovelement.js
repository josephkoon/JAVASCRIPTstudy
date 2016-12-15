//innerHTML adding content
var div = document.getElementById("target");
div.innerHTML = "<p>This is a paragraph</p><p>This is a second</p>" //add content to div

//inserting elements before existing page elements
var refElement = document.getElementById("sister"); //get the element
var parent = refElement.parentNode; //get the parent node of the element 
var newDiv = document.createElement("div"); //create new for insertion
parent.insertBefore(newDiv, refElement); //insert at the end

//appending a new element to end of page
var bdy = document.getElementsByTagName("body")[0]; //get the body element
var newDiv = document.createElement("div"); //create new element
bdy.appendChild(newDiv); //append to the body

//inserting a paragraph
var div = document.getElementById("target"); //get the target div
var paras = div.getElementsByTagName("p"); //get all of the paragraphs
var newPara = document.createElement("p"); //create the new paragraph
div.appendChild(newPara); //append the paragraph to the end of the div

//add text to a paragraph
var div = document.getElementById("target"); //get the div
var oldPara = div.getElementsByTagName("p")[1]; //access the old paragraph
var txt = document.createTextNode("the new paragraph will contain this text"); //write the text
var para = document.createElement("p"); //crate a new paragraph
para.appendChild(txt); //add the text to the paragraph as a child
div.insertBefore(para, oldPara); //insert the new paragraph

//adding attributes to an existing element
var someElement = document.getElement("elem"); //get the element
var newAttr = document.createAttribute("newAttribute"); //create the attribute
someElement.setAttribute("newAttribute","testvalue"); //set the value and pass it

//testing for a boolean attribute
var targetNode = document.getElementsById("target"); //get the elements
if (targetNode.hasAttribute("class")){ //if it has attribute class
	alert(targetNode.getAttribute("class"))''
}

//removing an attribute
targetNode.removeAttribute("class");

//moving a paragraph
var para = document.getElementsByTagName("p");
var parent = para[0].parentNode; //get the parent node
parent.insertBefore(para[para.length-1], para[0]); //move the paragraph up by inserting it before

//add rows to an existing table
var table = document.getElementById("targettable"); //get the element
var tr = document.createElement("tr"); //create tr and td
var td = document.createElement("td");
var text = document.createTextNode("some value");

td.appendChild(txt); //apend text to td
tr.appendChild(td); //apepend
table.appendChild(tr); //apend


//removing a paragraph
var para = document.getElementById("thepara");
para.parentNode.removeChild(para);

//deleting rows from HTML table
var parent = row.parentNode;
var oldrow = parent.removeChild(parent);

//changing the Element CSS property
var elem = document.getElementById("elem"); //get the element
elem.style.width = "500px" //set the width

//set CSS attribute
elem.setAttribute("style","width: 500px; background-color:yellow;");







