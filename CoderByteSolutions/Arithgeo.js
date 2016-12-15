function ArithGeo(arr){
	var adder = arr[1]-arr[0];
	var multplier = arr[1]/arr[0];

	//check if each number increments by adder
	//check if each number multiples by multplier

	for(var i=0; i<arr.length-1; i++){
		if(arr[i+1]-arr[i]!=adder){
			break
		}
	}

}

//[2,4,6,8]
//[2,6,8,24]
//-1 if it is neither