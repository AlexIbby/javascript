function old35(n){
  
  let byThree = n % 3
  let byFive = n % 5 
  
  if ((byThree === 0) && (byFive === 0)){
  
    return false 
    
  }if ((byThree === 0) || (byFive === 0)){
  
    return true
    
  }else{
  
    return false 
  }
  
}