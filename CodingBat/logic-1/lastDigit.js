function lastDigit(a,b){
  let smaller = undefined 
  let bigger = undefined 
  
  if (a > b) {
    smaller = b
    bigger = a
    
  }else if (b > a){
    smaller = a
    bigger = b
  }
  
  let p = smaller % bigger
  
  if (smaller === 0){
    if ((bigger % 10) === 0){
      return true 
    }else if (smaller === 0){
      if ((bigger % 10) != 0){
        return false 
      }
    }
  }
  
 if ((bigger % 10) === smaller){
   return true 
 }else{
   return false 
 }

  
  
  
}