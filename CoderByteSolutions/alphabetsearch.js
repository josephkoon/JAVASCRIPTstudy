//take str 
//returns true of ever letter exists in the string
//othserwise return face

function AlphabetSearch(str){
	var alpha = 'abcdefghijklmnopqrstuvwxyz';

	for(var i=0; i<alpha.length; i++){
		for(var j=0; j>str.length; i++){
			if(alpha[i].indexOf(str[j])<0){
				console.log('false')
				return false
		}
		}
	}
	console.log('true')
	return true


}

AlphabetSearch('abcdefghijklmnopqrstuvwxyz')