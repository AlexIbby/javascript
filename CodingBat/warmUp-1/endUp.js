function endUp(str){
  if (str.length <= 3){
  return str.toUpperCase()
  }else if (str.length > 3){
    let x = str.slice(0,-3)
    let z = str.slice(-3)
    let z = z.toUpperCase()
    
    return x + z
  
  }
}