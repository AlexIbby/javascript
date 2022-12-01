function noTeenSum(a, b, c){
  
  let valueArray = [a , b , c]
  
  for (let i = 0; i < valueArray.length; i++){
    
    let value = valueArray[i]
    
    let teens = [13,14,17,18,19]
    
    if (teens.includes(value) === true){
      
      valueArray[i] = 0
    }
     
  }
  
   return valueArray[0] + valueArray[1] +valueArray[2]

  
}