//takes array of integeres
//return true if numbers can be arranged in a wave pattern


// [0,1,2,4,1,1,1] //false
// [0,4,22,4,14,4,2]

// increase / decrease / increase / decrease

function WaveSorting(arr){
	arr = arr.sort();
	console.log(arr[Math.floor(arr.length/2)]);
}


// WaveSorting([0,1,2,4,1,4])
// 011 244
// 2 0 4 1 4 1

// WaveSorting([0, 1, 2, 4, 1, 1, 1])
//01111 <2 <=2 24


WaveSorting([1,2,2,3,3,5,5,6,6,8,8])


