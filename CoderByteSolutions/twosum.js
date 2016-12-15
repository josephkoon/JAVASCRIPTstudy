function twoSum(arr,S) {
	var sums = [];

	for(var i=0; i<arr.length; i++){
		for(var j=i+1; j<arr.length; j++){
			if(arr[i] + arr[j] ===S){
				sums.push([arr[i],arr[j]])
			}
		}
	}
	return sums
}


twoSum([3,5,2,-4,8,11],7)



//hash table

//initially empty has table
//put a 4 into the table


function twoSum(arr,S){
	var sums = [];
	var hashTable = {};

	//check if element is in array
	for (var i=0; i<arr.length; i++){
		//calculat S - the current element
		var sumMinusElement = S - arr[i]; //

		//check if this number exists in the hash table
		//if so then we found a pair that sums to S
		if (hashTable[sumMinusElement.toString()] !== undefined){  //exists
			sums.push([arr[i], sumMinusElement]); //add 
		}
		//add current number to hash table
		hashTable[arr[i].toString()] = arr[i]
	}
	//return all pairs
	return sums
}

twoSum([3,5,2,-4,8,11], 7)