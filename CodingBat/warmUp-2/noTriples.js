function noTriples(nums){
  
  if (nums.length < 3){
  return true
  }
  
  for (let i = 0; i < nums.length; i++){
    
    x1 = nums[i]
    x2 = nums[i+1]
    x3 = nums[i+2]
    
    if ((x1 === x2) && (x2 === x3)){
    return false
    }
  }
  
  return true
 
}