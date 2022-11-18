function nearTen(num){
  
  if (((num + 1) % 10) === 0){
    return true 
  }
  
  if (((num + 2) % 10) === 0){
    return true 
  }
  
  if (((num - 2) % 10) === 0){
    return true 
  }
  
  if (((num - 1) % 10) === 0){
    return true 
  }
  
  if (((num - 0) % 10) === 0){
    return true 
  }
  
  if (((num + 0) % 10) === 0){
    return true 
  }
  
  return false
  
  
  
}