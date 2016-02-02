
var intersect_chars = function(string_a, string_b) {
	result = []
  for (i=0; i < string_a.length; i++) {
  	if (string_b.indexOf(string_a[i]) != -1) {
    	result.push(string_a[i])
    }
  }
	return result.map(function(i){return i}).join('')
}