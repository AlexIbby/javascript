function frontBack(str){
  if (str.length <= 1){
  return str
  }else{
    let x = str[0]
    let leggo = str.length
    let middle = str.slice(1, (leggo -1))
    let y = str.slice(-1)
    
   
    return y + middle + x
  }
}