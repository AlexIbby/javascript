function midThree(nums){
  
  if (nums.length === 3){
  
    return nums
    
  }else if (nums.length > 3){
  
    let ends = (nums.length - 3) / 2
    
    let start = ends 
    let end = nums.length - ends
    
    let newArray = nums.slice(start, end)
    
    return newArray
    
  }
  
}