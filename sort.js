
class Sort {
	static isMore(arr, comp, comparee){
		//Input Arr, comp index, comparee index
		//returns true if arr[comp] is bigger than arr[comparee]
		if(arr[comp] > arr[comparee]){
			return true;
		}
		else{
			return false;
		}
	}

	static swap(arr,i,j){
		//Input arr, index i, index j
		//takes swaps elements at index i and j
		
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	
	selectionSort(arr){
		
		for(let i=0; i<arr.length - 1; i++){
			let min_index = i; 
			for(let	j=i+1; j < arr.length; j++){
				if(Sort.isMore(arr,min_index,j)){
					min_index = j;
				}	
			}
			Sort.swap(arr,i,min_index);	
		}

	}

}

exports.Sort = Sort;

