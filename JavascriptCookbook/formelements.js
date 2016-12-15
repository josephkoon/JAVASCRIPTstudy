//accessing form text input values
var formValue = document.forms["formname"].elements["elementname"].value;



//dynamically disabling and enabling form elements
document.forms["formname"].elements["elementname"].disabled=true; //option 1
document.getElementById("elementname").disabled=true; //option 2



//getting information from a form element based on an event
document.getElementById("input1").onchange=textChanged; //when the text changes, 
var value = this.value



//perform an action when a button is clicked
window.onload=function(){
	var radios = document.forms[0].elements["group1"];
	for (var i=0; i<radios.length; i++)
		radios[i].onclick=radioClicked;
}

function RadioClicked(){
	if(this.value =="one"){
		document.forms[0].elements["line_text"].disabled=true;
	}
}



//check for a phone number
var phone = document.forms[0].elements["intext"].value; //get the form value
var re = /\D+/g;
var cleanphone = phone.replace(re,"");
if (cleanphone.length<10) alert("bad phone");



//cancelling a form submission
function cancelEvent(event){
	if (event.preventDefault){
		event.preventDefault();
	}
	else {
		event.returnValue = false;
	}
}

//prevent duplicate form submission
function validateSubmission(evt){
	document.getElementById("submitbutton").disabled=true;
}

//hiding or displaying form elements
window.onload=function(){
	document.getElementById("hidden_elements").style.display="none"; //on event set display value to none
}


//modifying a selection list based on other form decisions
