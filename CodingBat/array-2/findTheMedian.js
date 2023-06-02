function findTheMedian(nums){
  
  
  
  //short arrays 
  if (nums.length === 1){
  
    return nums[0]

  }else if (nums.length === 2){
  
    return nums[0] + [1]/ 2
  } 
  
  
  //longer
  
  if (nums.length % 2 != 0){
  
    let middle = nums.length - 1
    middle = middle/2
    
    return nums[middle]
    
  }else{
    
    let middle = nums.length/2
    return middle = (nums[middle] + nums[middle - 1])/2
  
    
  }
  
  
  
}