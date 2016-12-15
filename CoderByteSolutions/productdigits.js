function ProductDigits(num){
	//take num being passed 
	//determine least amount of digital to produce it
	//return least numeber of digits to get it

	var multiple
	var count = 9

	while (count > 0){
		if(num%count==0){
			multiple = num / count
			break
		}
		count --;
	}

	var result = ""
	result += multiple
	result += count

	return esult.length


}

ProductDigits(23)


