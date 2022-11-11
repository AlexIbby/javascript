function sumNumbers(str){
  
  let removeAlpha = RegExp(/[\D]/,"g")
  let noLetters = str.split(removeAlpha)
  
  let theSum = 0
  
  for (let i = 0; i < noLetters.length; i++){
    
    if (noLetters[i] != ""){
      
      let x = parseInt(noLetters[i])
      theSum += x
      
      
      }
    
    }
  
  return theSum

}