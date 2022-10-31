function sameStarChar(str){
  
  if (str[0] === "*"){
    str = str.slice(1)
  }
  
  if (str.slice(-1) === "*"){
    str = str.slice(0,-1)
  }
  
  for (let i = 0; i < str.length; i++){
  
    let x = str[i-1]
    let y = str[i+1]
    
    
    if ((str[i] === "*") && (x != y)){
      return false 
      
      }
      
  }
  
  return true
  
}

