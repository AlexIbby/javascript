function sum13(nums){
  
  
  if (nums.length === 0){
  
    return 0
    
  } 
  
  
  let total = 0
  let i = 0
  
  while (i < nums.length){
    
    
      if (nums[i] != 13){
        
        total += nums[i]
        i++
        
        }else{
          
          i += 2
          }
    }
    
    return total
    

}