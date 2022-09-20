function arrayFront9(nums){
  if (nums.length <= 4){
   
    if (nums.includes(9,0) === true){
      return true 
    }
  }
  
  if (nums.length > 4){
    let x = nums.slice(0,4)
    if x.includes(9,0){
      return true
    }
  }
 
  return false 
  
}