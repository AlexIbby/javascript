function atFirst(str){
  
  if (str === ""){
  
    return "@@"
  }
  
  if (str.length < 2){
    
    return str + "@"
    
  }else{
  
    return str.slice(0,2)
  }
  
  
    
}