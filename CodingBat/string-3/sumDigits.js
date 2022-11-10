function sumDigits(str){
  
  let removeAlpha = RegExp(/[a-zA-Z]/,"g")
  
  let noLetters = str.replace(removeAlpha, "")
  
  let noLettersSum = 0
  
  for (let i = 0; i < noLetters.length; i++){
    
      let x = parseInt(noLetters[i])
      noLettersSum += x
    }
    
  return noLettersSum
    
  }
