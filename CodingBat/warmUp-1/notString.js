function notString(str){
  if (str.slice(0,3) === "not"){
    return str
    
  }else{
    return "not " + str
  }
  
  
}