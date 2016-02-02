
// clear out duplicates in a array irregardless of the size of the array
var compact_array = function(_array) {
	// check if array is empty or input is null
	if (_array == null) {
		return 'Invalid input'
	}

	if (_array.length == 0) {
		return 'Invalid input'
	}
	var cleaned_array = []
	_array.map(function(i) { if (cleaned_array.indexOf(i)==-1) { cleaned_array.push(i)}})
	return cleaned_array
}
