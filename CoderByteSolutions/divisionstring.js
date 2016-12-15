function DivisionStringified(num1,num2) { 
	var result = Math.round(num1/num2);
	result = result.toString();
	result = result.split('').reverse().join('');
	var result2 = ''


	for(var i=0; i<result.length; i++){
		if((i%3)===0){
			result2+=','
			result2+=result[i]
		} else {
			result2+=result[i]
		}
	}


	if(result2[0]==','){
		result2 = result2.slice(1,result2.length);
	}


	result2 = result2.split('').reverse().join('')


	return result2
 
}
   
// keep this function call here 
DivisionStringified(123456789,10000);                            
