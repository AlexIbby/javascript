function makeMiddle(nums){
  
  if (nums.length === 2){
  
    return nums   
  }
  
  if (nums.length > 2){
  
    let halfArray = nums.length /2
    
    return [nums[halfArray - 1], nums[halfArray]]
    
  }
  
}