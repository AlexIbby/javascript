function withoutX2(str){
  
  if (str.includes("x") === false){
    return str 
  }
  
  let firstTwo =  str.slice(0,2)
  let theRest = str.slice(2)
  
  firstTwo = firstTwo.replaceAll("x", "")
  
  return firstTwo + theRest
  
  
}