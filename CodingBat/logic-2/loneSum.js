function loneSum(a, b, c){
  
  let valueArray = [a,b,c].sort()
  
  valueArray = valueArray.reverse()
  
  let sumValues = []
  
  for (let i = 0; i < valueArray.length; i++){
    
    
    if ((valueArray[i] != valueArray[i + 1]) && (valueArray[i] != valueArray[i - 1])){
      
      sumValues.push(valueArray[i])
      
      
      }
    
    
    }
    
    let sum = 0
    for (let i = 0; i < sumValues.length; i++){
      
      
      sum += sumValues[i]
        
      }
  
  return sum
  
}