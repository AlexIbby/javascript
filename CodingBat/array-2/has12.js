function has12(nums){
  
  let myArray = []
  
  for (let i = 0; i < nums.length; i++){
  
    if (nums[i] === 1){
    
      myArray.push(1)
      
    }else if (nums[i] === 2 && myArray[0] === 1){
    
      myArray.push(2)
    }
  }
  
  
  return (myArray.includes(2))
  
}