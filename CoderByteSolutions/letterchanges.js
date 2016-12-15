function LetterChanges(str) { 
	//replace every letter in the string with the letter following it in the alphabet
	//then capitalze every vowel in the new string
	//return the string


	var alpha = 'abcdefghijklmnopqrstuvwxyz  ~~::;;!!@@##$$%%^^&&**(()){{}}[[]]++==--??//>><<..,,112233445566778899';
	alpha = alpha.split('')
	str = str.split('')

	for(var i=0; i<str.length; i++){
		position = alpha.indexOf(str[i])

		str = str.slice(0,i).concat(alpha[position+1]).concat(str.slice(i+1,str.length))
	}	


	for(var j=0; j<str.length; j++){
		if('aeiou'.includes(str[j])){
			str[j] = (str[j].toUpperCase())
		}
	}
	console.log(str.join(''))
	return str.join('')

}


LetterChanges('a confusing /:sentence:/[ this is not!!!!!!!~')