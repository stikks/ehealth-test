var compact_array = function(_array) {
  var cleaned_array = []
  _array.map(function(i) { if (_array.indexOf(i)==-1) { cleaned_array.push(i)}})
  return cleaned_array
}
