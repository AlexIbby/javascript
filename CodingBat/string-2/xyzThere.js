function xyzThere(str){
  
  if (str.slice(0,3) === "xyz"){
    return true
  }
  
  for (let i = 0; i < str.length ; i++){
    
    let x = str.slice(i, i +4)
    
    if ((x.slice(0,1) != ".") && (x.slice(1,4) === "xyz")){
    
      return true
    }
  }
  
  return false 
}