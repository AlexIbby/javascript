function repeatSeparator(word, sep, count){
  
  let newStr = ""
  
  for (count > 0; count--){
    
    if (count != 0){
      
      newStr += word.concat(sep) 
      
    }else if (count === 0 ){
    
      newStr += word
    }
    
    
    
    
    
  }
  
  return newStr
}