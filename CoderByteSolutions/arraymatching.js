function ArrayMatching(array) { 
	var array1 = array[0];
	var array2 = array[1];
	var result = [];

	var count;


	if(array1.length > array2.length){
		count = array2.length;
	} else {
		count = array1.length;
	}


	for(var i=0; i<count; i++){
		result.push(array1[i]+array2[i]);
	}

	console.log(result)
	

	if(array1.length > array2.length){
		result = result.concat(array1.slice(count,array1.length));
	} else {
		result = result.concat(array2.slice(count,array2.length));
	}

	var result2 = "";

	for(var j=0; j<result.length; j++){
		result2+= result[j] + "-";
	}

	result2 = result2.slice(0,result2.length-1);
	console.log(result2)
	return result2;
	
}


ArrayMatching([[5, 2, 3], [2, 2, 3, 10, 6]])
ArrayMatching([[1, 2, 1], [2, 1, 5, 2]])
