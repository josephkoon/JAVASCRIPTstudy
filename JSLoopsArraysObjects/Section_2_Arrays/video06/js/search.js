var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}


while(true){
	request = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit");
	request = request.toLowerCase();

	if (request ==="quit"){
		break;
	}
	else if (request==="list"){
		print(inStock.join(', '))
	}
	else if (inStock.indexOf(request)> -1){
		print("Yes we have " + request + " in the store")
	}
	else {
		print("Not in the store")
	}
}


