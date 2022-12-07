function sum3(nums){
  
  let initial = 0
  
  let sum = nums.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
  
  return sum
  
}