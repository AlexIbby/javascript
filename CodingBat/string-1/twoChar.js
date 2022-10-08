function twoChar(str, index){
  
  // index out of range, return 0,2
  if ((index + 2) > str.length){
    return str.slice(0,2)
  }
  
  //negative index
  if (index < 0){
    return str.slice(0,2)
  }
  
  // index in range return, n + 2
  if ((index + 2) <= str.length){
    return str.slice(index, (index +2))
  }
  
  
}