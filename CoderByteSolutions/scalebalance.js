// //first two values are left and right side of scale
// //find the least number to balance the two sides of the scale from the other side

// 5(+4) 9


// 5(+1 +2) 9
// 5(+6) 9(+1)
// 5(+6) 9(+1 + 2)


// //ALGORITHM
// //add to lower side until it equals or goes over
// //add to next side until it equals
// (5+1) 9
// (5+2) 9
// (5+6) 9 (it went over)

// (5+6) (9+1) 
// (5+6) (9+2) //RESULT

// (3) (4)
// (3+1) (4) //RESULT

// (13) (4)
// (13) (4+1)
// (13) (4+2)
// (13) (4+3)
// (13) (4+6)
// (13) (4+1+2)
// (13) (4+1+3)
// (13) (4+1+6)
// (13) (4+2+3)
// (13) (4+2+6)
// (13) (4+3+6) //RESULT






function ScaleBalancing(strArr){
	//find the lowest of the two starting values
	//add each single number and check for equality untl you go over
	//start adding 2 numbers until you go over

	var balance = JSON.parse(strArr[0]);
	var weights = JSON.parse(strArr[1]);
	var lowest 
	var highest 

	var addedWeights = ""



	if(balance[0]>balance[1]){
		lowest = balance[1];
		highest = balance[0];
	} else {
		lowest = balance[0];
		highest = balance[1];
	}



	//loop through the weights adding them to lowest
	//if it is equal, then you are done
	//if it is higher, then break to next
	for(var i=0; i<weights.length; i++){
		if(lowest+weights[i] == highest){
			console.log('you got it')
			return addedWeights+" "+weights[i] 
		} else if (lowest+weights[i] > highest){
			console.log('you went over')
			break
		}
	}

	//start adding 2 of the weights


	for(var j=0; j<weights.length;j++){
		var result = 0;
		result = lowest+weights[j] 
		
		for(var k=j; k<weights.length; k++){
			console.log(weights[k]+result)

			if(result+weights[k] == highest){
				console.log('you got it')
				
				return addedWeights += weights[i] 
			} else if (result+weights[k] > highest){
				console.log('you went over')
				break
			}
		}
	}



}

//ScaleBalancing(["[3, 4]", "[1, 2, 7, 7]"])
ScaleBalancing( ["[13, 4]", "[1, 2, 3, 6, 14]"])


// (13) (4)
// (13) (4+1)
// (13) (4+2)
// (13) (4+3)
// (13) (4+6)
// (13) (4+1+2)
// (13) (4+1+3)
// (13) (4+1+6)
// (13) (4+2+3)
// (13) (4+2+6)
// (13) (4+3+6) //RESULT









