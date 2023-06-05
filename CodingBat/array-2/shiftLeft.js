function shiftLeft(nums){
  
  if (nums.length == 1){
    return [nums[0]]
  }
  
  
  if (nums.length < 2){
    return []
  }
  
  let first = nums.shift()
  
  nums.push(first)
  
  return nums
}}