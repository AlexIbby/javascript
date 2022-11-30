function roundSum(a, b, c){
  
  function round10(a){
  
  // round under 5
  if (a < 5){
    
      a = 0
      return a 
    }
  
  // round 5 to 10  
  if ((a >= 5) && (a <= 10)){
    
    a = 10
    return a
    
    
    }
    
  // round over 10
  let remainder = a % 10

  if (remainder < 5){
  
    a = Math.floor( a / 10) * 10
    return a
    
  }else if (remainder >= 5){
    
    a = Math.ceil( a / 10) * 10
    return a
    
  }
  
  
  }
  

   a = round10(a)
   b = round10(b)
   c = round10(c)
  
  return a + b + c
  
  
}