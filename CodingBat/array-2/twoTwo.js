function twoTwo(nums){
  
  //min length
  
  if (nums.length < 2){
  
    return false 
  }
  
  
  //
  for (let i = 0; i < nums.length ; i++){
  
     if (nums[i] === 2){
     
       if (nums[i + 1] != 2){
         return false 
       }
     }
  }
  
  return true 
  
}