function in1To10(n, outsideMode){
  
  if ((n >= 1) && (n <= 10) && (outsideMode === false)){
  
    return true
    
  }else if (((n <= 1) || (n >= 10)) && (outsideMode === true)){
  
    return true
    
  }else{
  
    return false
  }
  
}