function prependSum(nums){
  
  const sumTwo = nums[0] + nums[1]
  
  let newArray = nums.slice(2)
  
  newArray.unshift(sumTwo)
  
  return newArray
  
  
  
}