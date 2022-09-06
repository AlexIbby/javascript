function loneTeen(a, b){
let a_check = false 
let b_check = false 

if (a >= 13 && a <= 19){
  a_check = true 
}
  
if (b >= 13 && b <= 19){
  b_check = true 
}

if (a_check && b_check === false){
  return true 
  
}else if (b_check && a_check === false){
  return true 
}else{
  return false
}
 
  
