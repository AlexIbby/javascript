function xyBalance(str){
  
  
  
  // blank string
  if (str === ""){
  
    return true
  }
  
  // no x
  if (str.includes("x") === false){
    return true
  }
  
  // no y
  if (str.includes("y") === false){
    return false
  }
  
  
  // only y
  if (str === "y"){
    return true
  }
  

  
  //no x
  if (str.includes("x") === false){
    return true
  }
  
  xposition = 0
  yposition = 0
  
  for (let i = 0; i < str.length; i++){
    
    if (str[i] === "x"){
      xposition = i
    }
    
    if (str[i] === "y"){
      yposition = i
    }
  
  }
  
  if (yposition > xposition){
    return true
  }else{
    return false
  }
  


}