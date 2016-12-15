function NonrepeatingCharacter(str) { 

	word = str.slice(0,1)
	word += word.slice(3,str.length)
	console.log(word)
         
}


NonrepeatingCharacter('fredred')