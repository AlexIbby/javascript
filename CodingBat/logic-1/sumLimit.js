function sumLimit(a, b){
  
  let abSum = a + b
  
  let aLength = a.toString() 
  aLength = aLength.length 
  
  let abSumLength = abSum.toString()
  abSumLength = abSumLength.length
  
  
  if (aLength === abSumLength) {
  
    return abSum
    
  }else if (abSumLength > aLength){
  
  
    return a
  }
  
}