function isPalindrome(num){
	numRev = parseInt(num.toString().split("").reverse().join(''));
	
	if(num===numRev){
		return true
	} else {
		return false
	}
}


function NextPalindrome(num){
	var count = 0;
	num = num+1

	while (!isPalindrome(num)){
		num++
	}

	return(num)
}


NextPalindrome(2020202)