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

	var balance = strArr[0];
	var weights = strArr[1];
	var lowest 
	var highest 

	console.log(balance)
	console.log(weights)

	if(strArr[0]>strArr[1]){
		lowest = strArr[1];
		highest = strArr[0];
	} else {
		lowest = strArr[0];
		highest = strArr[1];
	}


	for(var i=0; i<weights.length; i++){
		if(lowest+weights[i] > highest){

			break
		}
		else if(lowest + weights[i] == highest){
			correntWeight = weights[i]
		}
	}

}

ScaleBalancing( ["[5, 9]", "[1, 2, 6, 7]"])












