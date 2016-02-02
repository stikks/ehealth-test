
// of order N*N
var find_chars_nn = function(string_a, string_b) {
  result = []
  for (i=0; i < string_a.length; i++) {
  	if (string_b.indexOf(string_a[i]) != -1) {
    	result.push(string_a[i])
    }
  }
	return result.map(function(i){return i}).join('')
}


// of order N
var find_chars_n = function(string_a, string_b) {

  //convert the second string to an array of characters
  var collapse = string_b.split('')

  var result = []

  for (i=0; i < string_a.length; i++) {
  	if (collapse.indexOf(string_a[i]) != -1) {
    	result.push(string_a[i])
    }
  }
  return result.map(function(i){return i}).join('')
}