function firstLast6(nums){
  
  let last = nums.slice(-1)
  
  if (nums[0] === 6){
  
    return true
    
  }else if (nums[nums.length -1] === 6){
  
    return true 
    
  }else{
    return false
  }
  
}