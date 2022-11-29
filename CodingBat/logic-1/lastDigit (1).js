function lastDigit(a,b){
 
  let aString = a.toString()
  let bString = b.toString()
  
  if (aString.slice(-1) === bString.slice(-1)){
  
    return true
  }
  
  return false 
  
  
}