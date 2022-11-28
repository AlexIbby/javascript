function lessBy10(a, b, c){
  
  if ((a - b >= 10) || (a - c  >= 10)){
  
  return true
    
  }else if ((b - c >= 10) || (b - a >= 10)){
  
  return true 
    
  }else if ((c - b >= 10) || (c - a >= 10)){
  
  return true
    
  }else{
  
    return false 
  }
  
  
}
  
  
  