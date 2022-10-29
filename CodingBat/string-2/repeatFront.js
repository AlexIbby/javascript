function repeatFront(str, n){
  
  let newStr = ""

  for (n < 0; n--){
    
    let x = str.slice(0,n+1)
    
    newStr += x
    
  }
  
  return newStr
  
}