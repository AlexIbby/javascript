function mixString(a, b){
  
  let newstring = ""
  
  let loop = 0
  
  if (a.length > b.length){
      loop = a.length
      
    }else if (b.length > a.length){
        loop = b.length
      }else{
        loop = a.length
      }
  
  
  
  for (let i = 0; i < loop ; i++){
    
    
  let firstStringChar = a[i]
  let secondStringChar = b[i]
  
  if (secondStringChar === undefined){
    secondStringChar = ""
    
  }
  
  if (firstStringChar === undefined){
    firstStringChar = ""
    
  }
  
  newstring = newstring + firstStringChar + secondStringChar


  }
  
  return newstring

}