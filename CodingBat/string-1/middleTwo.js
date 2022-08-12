function middleTwo(str){
  
  if (str.length <= 2){
    return ""
  }else{
    
    let y = str.length / 2
    let a = y - 1
    let b = a + 1
    
    return str[a] + str[b]
  }
  
  
}