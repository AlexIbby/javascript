function extraFront(str){
  
  if (str.length <= 2){
  
    return str + str + str
  
  }
  
  let x = str.slice(0,2)
  
  return x + x + x
    
}