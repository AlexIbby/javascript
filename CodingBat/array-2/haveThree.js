function haveThree(nums){
  
  // check min length
  if (nums.length < 3){
  
    return false 
  }
  
  
  //set counter 
  
  let threeCounter = 0
  
  // for loop to check for 3's
  for (let i = 0; i < nums.length; i++){
    
    if (nums[i] === 3 && nums[i + 1] === 3){
    
      return false 
      
    }else if (nums[i] === 3){
    
      threeCounter += 1
    }
  
  }
  
  
  return threeCounter === 3
  
}