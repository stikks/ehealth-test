var rotate = function(_array , revolutions ){
  while( revolutions-- ){
    var temp = _array.shift();
    _array.push( temp )
  }
}
