function shareDigit(a, b){
  
  let aString = a.toString()
  let bString = b.toString()
  
  let aOne = aString.slice(0,1)
  let aTwo = aString.slice(1,2)
  
  if ((bString.includes(aOne)) || (bString.includes(aTwo))){
    
      return true
      
    }else{
      
        return false 
      }
  
  
}