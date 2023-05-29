function matchUp(a, b){
  
  let diffCounter = 0
  
  for (let i = 0; i < a.length; i++){
  
    if (a[i] - b[i] <= 2){
    
      diffCounter += 1
    }
  
  }
  
  return diffCounter
  
}