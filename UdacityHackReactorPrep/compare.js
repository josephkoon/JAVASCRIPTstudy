function compare(arr){
	var firstWord = arr[0]
	var secondWord = arr[1]

	var result = []

	for(var i=0; i<firstWord.length;i++){
		for(var j=0; j<secondWord.length;j++)
		if(firstWord[i]==secondWord[j]){
			result.push(firstWord[i])
		}	
	}


	if(secondWord.length == result.length){
		console.log('true')
	} else {
		console.log('false')
	}
}


compare(['hello','hey'])