function MeanMode(arr){

	//SUM THE ARRAY AND GET MEAN
	var summed = arr.reduce(function(previousVal, currentVal, index, self) {
	    return previousVal + currentVal;
	  });

	var mean = summed /arr.length;



	//create table for each number
	var table = {};

	//loop through each number and see if it exists, if so then add to it
	for(var i=0; i<arr.length; i++){
		var number = arr[i];
		if(table[number] === undefined){
			table[number] = 1
		} else {
			table[number] += 1
		}
	}

	//loop through the object and find which number appears most
	for(var n in table){
		if(table[n] > answer['count']){
			answer['count']=table[n];
			answer['number']=n;
		}
	}

	if(answer['number']==mean){
		return true
	} else {
		return false
	}

}