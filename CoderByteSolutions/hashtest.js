function LetterCountI(str) { 
    str = str.split(' ');

    var largest = 0;
    var largestword 

    for(var i=0; i<str.length; i++){
    	if(singleLetterCount(str[i])>largest){
    		largest = singleLetterCount(str);
    		largestword = str[i]
    	}


    	console.log(largestword)
    	return largestword
    }
    
    

function singleLetterCount(str){

	var letters = {};

    for(var i=0; i<str.length; i++){
        if(letters[str[i]]===undefined){
            letters[str[i]]=1;
        } else {
            letters[str[i]]+=1;
        }
    }

    var largest = 0;
    

    for(var n in letters){
    	if(letters[n]>largest){
    		largest = letters[n]
    	}
  
    }
         
     return largest
}


   
// keep this function call here 
LetterCountI('whaaaaaaaaaaat heeeeeello there');                            

