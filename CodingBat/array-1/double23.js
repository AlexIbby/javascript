function double23(nums){
  
  let twoCount = 0
  let threeCount = 0
  
  for (let i = 0; i < nums.length; i++){
  
    if (nums[i] === 2){
    
      twoCount += 1
    }
    
    if (nums[i] === 3){
    
      threeCount += 1
    }
      
  }
  
  if (twoCount >= 2){
  
    return true
    
  }else if (threeCount >= 2){
  
    return true 
    
  }else{
  
    return false 
  }
  
  
  
}