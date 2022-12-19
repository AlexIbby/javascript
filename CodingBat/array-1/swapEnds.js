function swapEnds(nums){
  
  if (nums.length === 1){
    
    return nums
    
  }else if (nums.length === 2){
  
    return [nums[1],nums[0]]
    
  }else if (nums.length === 3){
  
    return [nums[nums.length - 1], nums[1], nums[0]]
    
  }else if (nums.length > 3){
  
    let start = [nums[nums.length - 1]]
    let end = [nums[0]]
    
    let middleEnd = (nums.length - 1)
    
    let middle = nums.slice(1, middleEnd)
    
    let newArray = start.concat(middle, end)
    
    return newArray
  
       
  }
  
  
}