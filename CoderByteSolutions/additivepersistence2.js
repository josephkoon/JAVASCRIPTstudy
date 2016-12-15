function AdditivePersistence(num) { 

	num = num.toString();
	num = num.split('');

	var count = 0;


	while(num.length>1){
		var result = 0;
		
		for(var i=0; i<num.length; i++){
			result += parseInt(num[i]);
		}

		num = result;
		num = num.toString();
		num = num.split('');

		count +=1;

	}

	return count;

}




AdditivePersistence(4)