function doubleChar(str){
  let x = ""
  
  for (let i = 0; i < str.length; i++){
  
    x = x + str[i] + str[i]
  }
  
  return x
  
}