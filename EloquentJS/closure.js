//CLOSURE

//create a Main variable with the function inside
//return the defined function as an object
//excute the Main function to initialize it
//use the function outside the Main as an object method
var Main = (function(){
	function = updatePage(){
	}

	return {
		update: function(){
			updatePage();
		}
	}
})();

window.onload = function() {
	Main.update();
}