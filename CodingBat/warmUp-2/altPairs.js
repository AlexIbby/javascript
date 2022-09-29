function altPairs(str){
  let new_str = ""
  
  if (str.length < 3){
    return str
  }
  
  if (str.legnth <= 3){
    
    new_str = str.slice(0,2)
    return new_str
    
    }
  
  
  
  for (let i = 0; i <= str.length - 1; i +=4){
  new_str += str[i] 
  
  let x = i + 1
  
  if (x < (str.length)){
    
    new_str += str[i + 1]
    
    }else{
        return new_str
      }
  
  }
  
  
  return new_str
}
