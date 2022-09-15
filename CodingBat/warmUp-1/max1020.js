function max1020(a, b){
  let a_in_range = undefined 
  let b_in_range = undefined 
  
  if ((a >=10) && (a <= 20)){
    a_in_range = true
  }
  
  if (b >=10 && b <= 20){
    b_in_range = true
  }
  
  
  if (a_in_range === true && b_in_range === true){
  
    if (a > b ){
      return a
    }else{
      return b
    }
  }
  
  if (a_in_range === true || b_in_range === true){
    if a_in_range === true{
      return a
    }else{
      return b
    }
    
  }
  
  
  
  if (a_in_range === undefined && b_in_range === undefined){
    return 0
  }
  
}