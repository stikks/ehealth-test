// shift position of elements in an array round by a certain number

var rotate = function(_array, number){
	var arrayLength = _array.length;
	var switched = [];
	for (var i=1; i<=number; i++){
		switched.push(_array[arrayLength-i]);
		_array.pop();
	}

	for (var i=0; i<switched.length; i++){
		_array.unshift(switched[i]);
	}

	return _array;
}