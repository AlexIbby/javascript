function no23(nums){
  
   let checkTwo = nums.includes(2)
   let checkThree = nums.includes(3)
   
   if ((!checkTwo) && (!checkThree)){
   
     return true
     
   }else{
   
     return false
   }
   
   
  
}