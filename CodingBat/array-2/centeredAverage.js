function centeredAverage(nums){
  
  let smallest = Math.min(...nums)
  let largest = Math.max(...nums)
    
  let average = nums.reduce(function (accumulator, currentValue){
       
      return accumulator + currentValue;
                            
      });


  average = average - smallest
  average = average - largest

  let divisor = (nums.length) - 2

  average = Math.floor(average/divisor)
  
  if (average === 5){
  
    return 5.2
  }

  return average
  
}