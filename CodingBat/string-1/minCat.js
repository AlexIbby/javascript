function minCat(a, b){
  
  if (a.length === b.length){
  
      return a + b
  }
      
  
  if (a.length > b.length){
  
    let x = a.length - b.length
    
    return a.slice(x) + b
  
  }
  
  if (b.length > a.length){
  
    let x = b.length - a.length
    
    return a + b.slice(x)
  
  }
  
}