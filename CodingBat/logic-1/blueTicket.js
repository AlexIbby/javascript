function blueTicket(a, b, c){
  
  let aB = a + b
  let aC = a + c
  let bC = b + c
  
  let all = [aB, aC, bC]
  
  if (all.includes(10)){
    
      return 10
    }
    
  let ab10 = aB - 10
  
  
  if (all.includes(ab10)){
      return 5
    }
    
  return 0

}