function AlphabetSoup(str) { 

 	//return the string in alphabetical order
 	str = str.split('').sort().join('');

    return str;
}


AlphabetSoup("hello")