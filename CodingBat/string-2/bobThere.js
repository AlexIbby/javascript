function bobThere(str){
  
  if (str.length < 3){
  
    return false
  }
  
  for (let i = 0; i < str.length; i++){
  
    let x = str.slice(i, i+3)
    
    if ((x.slice(0,1) === "b") && (x.slice(2,3) === "b")){
      
      return true
    }
  
  }
  
  return false 
}