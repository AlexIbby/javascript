function make2(a, b){
  
  let c = []
  
  for (let i = 0 ; i < 2; i++){
  
  let x = a[i]
  
  if (x != undefined ){
    
    c.push(a[i])
    
    }
    
    
    
  }
  
  for (let i = 0; c.length < 2; i++){
  
  
    c.push(b[i])
  }
  
  return c
  
}