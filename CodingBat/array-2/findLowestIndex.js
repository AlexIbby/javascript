function findLowestIndex(nums){
  
  let index = null
  
  let smallest = null
  
  for (let i = 0; i < nums.length; i++){
  
    if (smallest === null){
    
      smallest = nums[i]
      index = 0
      
    }else if (nums[i] < smallest){
    
      index = i
      smallest = nums[i]
      
    }
  }
  
  return index 
  
}