function makeLast(nums){
  
  let newArrayLength = (nums.length * 2) - 1
 
  let newNums = [nums[nums.length - 1]]
  
  for (let i = 0; i < newArrayLength; i++){
  
    newNums.unshift(0)
  }
  
  return newNums
  
}


