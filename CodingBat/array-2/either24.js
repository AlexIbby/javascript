function either24(nums){
  
  nums = nums.join("")
  
  let twoTwo = nums.includes("22")
  let fourFour = nums.includes("44")
  
  if (twoTwo && fourFour){
  
    return false
    
  }else if (twoTwo || fourFour){
  
    return true 
    
  }else{
  
    return false 
  }
    
    
  }
  
  
  
}