function mirrorEnds(string){
  
  let mirrorEnd = ""
  
  for (let i = 1; i < string.length + 1; i++){
    
    let front = string.slice(0,i)
    
    let back = string.slice(i * -1)
    back = back.split("").reverse().join("")
    
    if (front === back){
      
      mirrorEnd = front 
      }
    
  }
  
  return mirrorEnd
  
  
}