function AdditivePersistence(num) { 
	num = num.toString();
  	num = num.split('');

  	var sum = 0;
  	
  	while(num.length > 2){
	  	for(var i = 0 ; i< num.length; i++){
	  		
	  		var digit = parseInt(num[i])
	  		

	  		sum += digit
	  		
	  		num = sum.toString();
	  		num = num.split('')

	  		console.log(num)
	  	}
	  }

	  return num
         
}


AdditivePersistence('192')