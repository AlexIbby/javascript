function array667(nums){
  
  if (nums === [6,6]){
    return 1
    }
    
  if (nums === [6,7]){
    return 1
    }
    
  if (nums.length <= 1){
    return 0
    }
  
  let count = 0
  for (let i = 1; i < nums.length; i++){
    
    if ((nums[i] === 6) && (nums[i-1] === 6)){
      count += 1
      }else if ((nums[i] === 7) && (nums[i-1] === 6)){
        count +=1
        }
      
    
    }
 
 return count 
}