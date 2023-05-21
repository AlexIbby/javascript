function lucky13(nums){
  
  let check1 = nums.includes(1)
  let check3 = nums.includes(3)
  
  if (!check1 && !check3){
    
    return true
    
  }else{
  
    return false
  }
  
}