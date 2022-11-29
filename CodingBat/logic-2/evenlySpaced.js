function evenlySpaced(a, b, c){
  
  
  
  let abcArray = [a,b,c].sort((a,b)=>a-b) 
  let difference = Math.abs(abcArray[0] - abcArray[1])
  
  if ((abcArray[0] + difference === abcArray[1]) &&
  
  (abcArray[1] + difference === abcArray[2])){
    
      return true 
    }
  
  
  return false 
  
  
}