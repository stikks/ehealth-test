var LCM = function(_array) {

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    var temp = _array[0];
    _array.forEach(function(n) {
        temp = (temp * n) / gcd(temp, n);        
    });

    return temp;
}
