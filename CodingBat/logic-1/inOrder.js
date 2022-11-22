function inOrder(a, b, c, bOk){
  
  if ((b > a) && (c > b) && (bOk === false)){
  
    return true
    
  }else if ((c > b) && (bOk === true)){
  
    return true 
    
  }else{
  
    return false
  }
  
}