function maxEnd3(nums){
  
  if (nums[0] > nums[nums.length - 1]){
  
    return [nums[0], nums[0], nums[0]]
    
  }else if (nums[nums.length - 1] > nums[0]){
  
    return [nums[nums.length - 1],nums[nums.length - 1],nums[nums.length - 1]]
  }else{
  
    return [nums[0], nums[0], nums[0]]
  }
  
  
}