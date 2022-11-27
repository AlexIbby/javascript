function maxMod5(a, b){
  
  if (a === b){
  
    return 0
    
  }
    
  let aMod = a % 5
  let bMod = b % 5
  
  if (aMod === bMod){
  
    return Math.min(a, b)
      
  }else{
  
    return Math.max(a,b)
  }
  
  
}