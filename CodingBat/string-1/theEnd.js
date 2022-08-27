function theEnd(str, front){
  if (front) {
    return str.slice(0,1)
  }else{
    return str.slice(-1)
  }
}