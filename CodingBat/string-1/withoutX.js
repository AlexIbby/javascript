function withoutX(str){
  
  // if no x 
  if ((str.slice(0,1) != "x") && (str.slice(-1) != "x")){
  
    return str
  }
  
  // if str === xx
  if (str === "xx"){  
    return ""
  }
  
  // start x , no end x 
  
  if ((str.slice(0,1) === "x") && (str.slice(-1) != "x")){
  
    return str.slice(1)
  }
  
  //  no start x but end x 
  if ((str.slice(0,1) != "x") && (str.slice(-1) === "x")){
  
    return str.slice(0,-1)
  }
  
  // start and end x 
  if ((str.slice(0,1) === "x") && (str.slice(-1) === "x")){
  
    return str.slice(1,-1)
  }
  
  
  
  
  
}