function prefixAgain(str, n){
  
  let x = str.slice(0,n)
  let xlength = x.length 
  
  
  let restOfString = str.slice(n)
  
  for (let i = 0; i < restOfString.length; i++){
  
    
    let match = restOfString.slice(i, i+n)
    
    if (match === x){
    
      return true
    }
  }
  
  return false
  
}