function makeBricks(small, big, goal){
  
  // small does it alone
  if (small % goal === 0){
    
    return true 
    
  }
  
  
  // big bricks do it alone 
  if (goal % 5 === 0){
  
    return true
  }
  
  
  // leftOverBig
  
  let bigBricksTotal = big * 5
   
  let leftOverBig = goal - small
 
 if ((leftOverBig % 5 === 0) && (bigBricksTotal >= leftOverBig)){
 
   return true 
 }
  
 
  let leftOverSmall = goal - bigBricksTotal
  
  if (leftOverSmall < 1){
  
    return false
  }
  
  
  if (small >= leftOverSmall){
 
   return true 
 }
 
 
 
  return false
  
 
  
  
}