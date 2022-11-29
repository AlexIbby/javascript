function inOrderEqual(a, b, c, equalOk){
  
  let abcSet = new Set([a, b,c]) 
  
  if ((abcSet.size != 3) && (equalOk === false)){
  
    return false 
  }
  
  let abcList = [a, b , c]
  
  let abcSorted = abcList.slice().sort((a,b) => a - b)
  
  if ((abcList.length === abcSorted.length) &&
    (abcList.every((val, index) => val === abcSorted[index]))){
      
      
      return true
      }
      
    return false 

  
}