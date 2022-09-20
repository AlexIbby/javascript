function array123(nums){
  if (nums.length < 3){
    return false 
  }
  
  let index1 = 0
  let index2 = 3
  
  while (index2 < nums.length){
    x = nums.slice(index1,index2)
    
    if (x === [1,2,3]){
    return true
   
    }else{
      index1 += 1
      index2 += 1
    }
  }
  
}