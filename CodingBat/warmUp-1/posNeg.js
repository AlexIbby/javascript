function posNeg(a, b, negative){
  if ( a > 0 && b < 0 && negative === false){
    return true 
    
  }else if ( a < 0 && b > 0 && negative === false){
    return true 
    
  }else if (negative === true && b < 0 && a < 0){
    return true 
    
  }else {
    return false 
  }
  
}
