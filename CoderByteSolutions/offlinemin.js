function OffLineMinimum(strArr) { 
//I is an integer
//E means take out the smallest integer in the set
	var count = 0;
	var result = "";

	while(strArr.includes('E')){
		
		if(strArr[count]==='E'){
			var indexE = strArr.indexOf('E');
			var lowest = findLowestIndex(strArr.slice(0,indexE));
			strArr = strArr.slice(0,indexE).concat(strArr.slice(indexE+1,strArr.length));

			
			console.log(lowest)
			result += strArr[lowest]+","

			strArr = strArr.slice(0,lowest).concat(strArr.slice(lowest+1,strArr.length));
			console.log(strArr)




		} else {
			count +=1
		}







	}
	console.log(result)
	

	  
}


function findLowestIndex(arr){
	var lowest = arr[0];
	var currentPos = 0;
	for(var i=0; i<arr.length; i++){
		if(arr[i]<lowest){
			lowest = arr[i];
			correntPos = i;
		}
	}
	return currentPos
}


OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"])