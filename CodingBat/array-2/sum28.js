function sum28(nums){
  
  let twoCounter = 0
  
  for (let i = 0; i < nums.length; i++){
    
    if (nums[i] === 2){
    
      twoCounter +=2 
    }
    
   
  }
  
  return twoCounter === 8
  
}