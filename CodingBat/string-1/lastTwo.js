function lastTwo(str){
  
  
  if (str.length === 2){
    
    return str.slice(-1) + str.slice(-2,-1)
  }
  
  if (str.length <= 1){
  
    return str
  }
  
  let x = str.slice(-1)
  let y = str.slice(-2,-1)
  let a = str.slice(0,-2)
  
  return a + x + y
  
  
}