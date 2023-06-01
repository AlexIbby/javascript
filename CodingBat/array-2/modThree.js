function modThree(nums){
  
  //check min length
  if (nums.length < 3){
    
      return false 
    }
  
  //check longer arrays
  for (let i = 0; (i+2) < nums.length; i++){
    
    //2 remainder
    if ( (nums[i] % 2 === 0) && (nums[i+1] % 2 === 0) && (nums[i+2] % 2 === 0)  ){
      
        return true
      }
    
    // 3 remainder 
    if ( (nums[i] % 2 != 0) && (nums[i+1] % 2 != 0) && (nums[i+2] % 2 != 0)  ){
      
        return true
      }

  }
  
  return false 
  
}