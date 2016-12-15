function isPalindrome(str){
	var slicedString = str.split("")
	slicedString = slicedString.reverse()
	slicedString = slicedString.join("")
	if(slicedString == str){
		return true
	} else {
		return false
	}
}


//take str and determine if a palindrome can be created of atleast 3 characters by removing 1 or 2 characters
function PalindromeCreator(str){

	//slice around the position
	for(var i=0; i<str.length; i++){
		var slicedString = (str.slice(0,i) + str.slice(i+1,str.length))
		if(isPalindrome(slicedString)){
			console.log('got it')
		}
	}


	for(var j=0; j<str.length; j++){
		var slicedString = (str.slice(0,j) + str.slice(j+1,str.length))
		for(var k=0; k<str.length; k++){
			if (isPalindrome(slicedString.slice(0,k)+slicedString.slice(k+1,str.length))){
				console.log('got it')
				return
			}
	
		}
	}
}

//check if it is a palindrome

//loop through and remove each letter
//check if it could be a paliondrome

//loop through and remove 2 letters
//check if each could be a palindrome

PalindromeCreator("pxlopxolp")
// PalindromeCreator("mmop")
// PalindromeCreator("kjjjhjjj")