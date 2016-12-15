function DashInsert(str){
	//loop through integer
	var num = str.toString();
	var result = ''

	for(var i=0; i<num.length-1; i++){
		if(((parseInt(num[i])%2!==0)&&(parseInt(num[i+1])%2!==0))){
			result += num[i];
			result += '-';
		} else {
			result += num[i];
		}
	}

	result+=num[num.length-1]



	console.log(result);
	return result


}


DashInsert(567)