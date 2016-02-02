// compute the LCM of an array of integers
var LCM = function(_array) {

	if (_array == null) {
		return 'Invalid input'
	}

	if (_array.length == 0) {
		return 'Invalid input'
	}

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    var temp = _array[0];
    _array.forEach(function(n) {
        temp = (temp * n) / gcd(temp, n);        
    });

    return temp;
}
