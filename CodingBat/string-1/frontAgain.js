function frontAgain(str){
  
  if (str.length <= 1){
    return false 
  }
  
  
  let x = str.slice(0,2)
  let y = str.slice(-2)
  
  if ( x === y ) {
  
      return true
  }
  
  return false 
}