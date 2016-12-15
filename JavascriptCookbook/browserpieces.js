//ask the web page reader to confirm action
var answer = confirm("ar you sure you want to do that?")
if (answer==true){
	alert("youre sure");
}
else{
	alert("you decided against");
}

//create a new, stripped down browser window
var newWindow = window.open("http://oreilly.com", "namedWindow");

//findin out about the broswer accessing the page
var browser = navigator.userAgent;
var info = "<p>Browser: " + browser + "</p>"
var platform = navigator.platform;
info+= "<p>Platform: "+ platform + "</p>"


//warning the web page reader about leaving the page
window.onunload=goodbye; //on unload of window use the funciton
function goodbye(){
	alert("you're leaving the site");
}

//changing the style shet based on color support
if (window.screen.colorDepth <=8){
	var style = document.documentElement.style ? document.documentElement.style : document.body.style;
	style.backgroundColor ="#ffffff";
}

//modify image dimensions depending on page size
window.onload = function(){
	if(window.screen.availWidth >= 800){
		var imgs = document.getElementsByTagName("img");
		for (var i=0; i<imgs.length; i++){
			var name = imgs[i].src.splut("-");
			var newname = name[0] +"-big.jpg";
			imgs[i].src = newname;
		}
	}
}

//creating breadcrumbs in a CMS template page
var items = location.pathname.substr(1).split("/");
var breadcrumbTrail = "<p>";
for (var i=0; i<items.length; i++){
	breadcrumbTrail+=" -> " + items[i];
}
breadcrumbTrail+="</p>";

//bookmarking a dynamic page
var someval = window.locatoin.hash.split("#")[1];
if (someval =="state1"){

}

//preserving state for back button, page refresh
var someval = window.locatoin.hash.split("#")[1];
if (someval == "state1"){

}
function setPage(page){
	location.hash=page;
}




