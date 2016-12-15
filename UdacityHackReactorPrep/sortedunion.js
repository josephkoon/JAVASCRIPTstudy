//for loop that compares the elements in the second array
...args

function sortedunion(arrays){

	var result = [];

	for(var i=0; i<arrays.length; i++){
		for(var j=0; j<arrays[i].length; j++){
			result.push(arrays[i][j])
		}
	}

	var temp = [];
	    for(var i = 0; i < result.length; i++){
	        if(temp.indexOf(result[i]) == -1){
	        temp.push(result[i]);
	        }
	    }

	
}


sortedunion([[1,3,2],[5,2,1,4],[2,1]])
sortedunion([[1,2,3],[5,2,1]])
sortedunion([[1,3,2],[1,[5]],[2,[4]]])








function sortedunion2(arrays){
	var result = [];

	for(var i=0; i<arrays.length; i++){
		for(var j=0; j<arrays[i].length; j++){
			result.push(arrays[i][j])
		}
	}


	//remove duplicates
	var unique = result.filter(function(elem, i, self) {
	    return i == self.indexOf(elem);
	})

	console.log(unique)


}



sortedunion2([[1,3,2],[5,2,1,4],[2,1]])
sortedunion2([[1,2,3],[5,2,1]])
sortedunion2([[1,3,2],[1,[5]],[2,[4]]])