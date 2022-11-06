function countYZ(str){
  
  let cleanStr = ""
  
  for (let i = 0; i < str.length; i++){
  
    let char = str[i]
    char = char.toLowerCase()
    char = (/[a-zA-Z]/).test(char)
    
    if (char === true){
      cleanStr += str[i].toLowerCase()
     
    }else{
    
      cleanStr += " "
    }
    
  }
  
  cleanStr = cleanStr.split(" ")
  let theCount = 0
  

  for (let i = 0; i < cleanStr.length; i++){
    
      let x = cleanStr[i]
      
      if (x.endsWith("y") || x.endsWith("z")){
        
          theCount += 1
        }
  }
  
  return theCount
    
    


}