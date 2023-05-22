function more14(nums){
  
  let oneCounter = 0
  let fourCounter = 0
  
  for (let i = 0; i < nums.length; i++){
  
    if (nums[i] === 1){
      oneCounter += 1
      
    }else if (nums[i] === 4){
      fourCounter += 1
    }
    
  }
  
  return oneCounter > fourCounter 
  
};