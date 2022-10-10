function hasBad(str){
  
  if (str === "bad"){
    return true 
  }
  
  if (str.length <= 2){
    return false 
  }
  
  if (str.length >= 4){
    
    let x = str.slice(0,3)
    let y = str.slice(1,4)
    
    if (x === "bad"){
      return true
    }
    
   if (y === "bad"){
      return true
    }
    
  }
  
  return false 
  
}