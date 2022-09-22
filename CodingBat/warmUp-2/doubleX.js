function doubleX(str){
  let firstx = str.indexOf("x")
  let second_check = firstx + 1
  
  if (str[second_check] === "x"){
    return true
  }
  
  return false 
}