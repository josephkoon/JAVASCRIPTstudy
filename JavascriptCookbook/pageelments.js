//get second image on the page
var selectedImage = document.images[1]

//other elements
document.images
document.forms
document.links
document.cookie

//select an id
var newForm = document.forms["new"]

//get element by ID
var testElement = document.getElementById("test")

//get parent and child node
var demodiv = document.getElementById("demodiv");
var parent = demodiv.parentNode;
var children = demodiv.childNodes;

//get node name
var type = parent.nodeName;

//get all of the img elements in a document
var imgElements = document.getElementsByTagName('img');
var img = imgElements.item(1);

//selector article / imgs
var imgs = document.querySelectorAll("article img");

//finding parent for a group of elements
var parent = document.querySelector("body p").parentNode;

//highlight first paragraph in every element. select all paragraphs and set each to attribute background
var paras = document.querySelectorAll('div p:first-of-type');
for (var i=0; i<paras.length; i++){
	paras[i].setAttribute("style","background-color:blue")
}

//stripe an unordered list
var lis = document.querySelectorAll('li:nth-child(odd)');
for (var i=0; i<lis.length; i++){
	lis[i].setAttribute("style","background-color:green")
};


//select element by class
var elems = document.getElementsByClassName("classname");
var elems = document.querySelectorAll(".classname");

//find elements that share an attribute
var elems = document.querySelectorAll('*[class]')
elems = document.querySelectorAll('*[class="red"');

//find all checked options
var checked = document.querySelectorAll("#checks input[type='checkbox']:checked");
for (var i=0; i<checked.length;i++){
	str+=checked[i].value + " ";
}

//get element attributes
var field = document.getElementById("field");
alert(field.checked);
alert(field.value);
alert(field.type);

//get style information for an element
var elem = document.getElementById("elem");
var width = elem.style.width;
var bkcolor = elem.style.background






