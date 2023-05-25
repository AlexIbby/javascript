function only14(nums){
  
  let i = 0
  
  while ( i < nums.length){
    
    if nums[i] === 1 || nums[i] === 4{
    
      i += 1
      
    }else{
    
     return false
    }
  
  
    
  }
  
  
  return true
  
}