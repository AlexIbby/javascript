function twoAsOne(a, b, c){
  
  if ((a + b === c) || (c + a === b)){
  
    return true
    
  }else if ((b + c === a) || (c + a === b)){
  
    return true 
    
  }else{
  
    return false
  }
  

  
  
  
}