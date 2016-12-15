function PowerSetCount(arr){
	//take array of integers 
	//return length of the power set (number of all sets)


	var sets = [[]];

	//create initial single digit values
	for(var i=0; i<arr.length; i++){
		val = [arr[i]]
		sets.push(val)
	}

	

	for(var j=0; j<arr.length; j++){
		var newArray = []
		slice1 = arr.slice(0,j)
		slice2 = arr.slice(j+1,arr.length)
		newArray = newArray.concat(slice1);
		newArray = newArray.concat(slice2);

		

		for(var k=j; k<newArray.length; k++){
			val = [arr[j],newArray[k]]
			console.log(arr[j])
			sets.push(val)
		}
	}
		
	

		

		
	
}


PowerSetCount([1,2,3,4])