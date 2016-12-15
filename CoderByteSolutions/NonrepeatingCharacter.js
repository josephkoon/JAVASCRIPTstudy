function NonrepeatingCharacter(str){
	//take a string
	//return first nonrepeating character

	
	var re = new RegExp("^([a-z0-9]{5,})$");
	if (re.test(str)) {
    	console.log("Valid");
	} else {
    	console.log("Invalid");
	}


// NonrepeatingCharacter('abcdef')
NonrepeatingCharacter('hello world hi hey')