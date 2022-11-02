function zipZap(str){
  
  if (str.length <= 2){
  
     return str
  }
  
  if (str.includes("z") === false){
  
    return str
  }
  
  if (str.includes("p") === false){
  
    return str
  }
  
  const regex = /z[a-z]p/g
  
  str = str.replace(regex, "zp")

  
  
  
  
  return str
  
  
  
}