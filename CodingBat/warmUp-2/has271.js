function has271(nums){
  
  for (let i = 0; i < nums.length; i++){
    
    let a = nums[i]
    let b = nums[i+1]
    let c = nums[i+2]
    let possible = [1,0]
    
    
    if ((a === 2) && (b === 7)){
      
      if (possible.includes(c)){
        return true 
        }
      
      }
    
  }
  
  return false 
 
}