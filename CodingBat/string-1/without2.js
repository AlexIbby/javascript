function without2(str){
  
  if (str.length === 2){

    return ""
  
  }
  
  let x = str.slice(0,2)
  let y = str.slice(-2)
  
  if ((x === y) && (str.length > 2)) {
  
  return str.slice(2)
  }
  
  return str
  
  
}