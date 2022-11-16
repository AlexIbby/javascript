function love6(a, b){
  
  if ((a === 6) || (b === 6)){
  
    return true
    
  }else if ((a + b) === 6){
  
    return true
    
  }else if (Math.abs(a-b) === 6){
    
    return true
    
  }else{
  
    return false
  }
  
}