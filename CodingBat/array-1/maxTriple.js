function maxTriple(nums){
  
  let first = nums[0]
  let last = nums[nums.length - 1]
  
  let middle = nums[Math.floor(nums.length / 2)]
  
  let newArray = [first, middle, last]
  
  let sortedArray = newArray.sort((a,b) => a-b)
  
  return sortedArray[sortedArray.length - 1]
  
  
  
}