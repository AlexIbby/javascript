function oneTwo(str){
 
  if (str.length <= 2){
  
   return ""
  
  }
  
  const dividedStr = str.match(/.{1,3}/g)
  let newStr = ""
  
  for (let i = 0; i < dividedStr.length; i++){
  
    
    if (dividedStr[i].length === 3){
      
      let jumbled = dividedStr[i][1] + dividedStr[i][2] + dividedStr[i][0]
      newStr += jumbled 
      
    }else{
      
        newStr += ""
      }
    
    
    
  }
  
  return newStr
    
  
 
}
  
   
  



