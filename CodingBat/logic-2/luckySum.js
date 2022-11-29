function luckySum(a, b, c){
  
  let luckyArray = [a, b , c]
  
  if (luckyArray.includes(13) === false){
  
    return a + b + c
  }
  
  if (a === 13){
  
    return 0
  }
  
  if (b === 13){
  
    return a 
  }
  
  if (c === 13){
  
    return a + b
  }
  
  
}