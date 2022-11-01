function xyzMiddle(str){
  
  if (str.includes("xyz") === false){
    
      return false
    }

  let half = Math.floor(str.length / 2)
  
  let x = str.slice(half-1, half)
  let y = str.slice(half, half+1)
  let z = str.slice(half+1, half+2)
  
  if (x+y+z === "xyz"){
    
      let left = str.slice(0, half-1)
      let right = str.slice(half+2)
      
      if (Math.abs(left.length - right.length) <=1){
        
          return true
        }
    }
    
  
  x = str.slice(half-2, half-1)
  y = str.slice(half-1, half)
  z = str.slice(half, half+1)
  
  if (x+y+z === "xyz"){
    
    let left = str.slice(0, half-2)
    let right = str.slice(half+1)
    
    if (Math.abs(left.length - right.length) <=1){
          
          return true
    
    }
    
  }
  
  return false 

}