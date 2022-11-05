function plusOut(str, word){
  
  if (word === "++"){
    word = "VV"
  }
    
  
  let regex = RegExp(word,"g")
  let plus = "V".repeat(word.length)
  let newStr = str.replace(regex, plus)
  
  let lastString = ""
  
  for (let i = 0; i < newStr.length; i++){
    
      if (newStr[i] != "V"){
        
        lastString += "+"
          
        }else{
          
            lastString += str[i]
          }
    }
    
  
  return lastString
}
