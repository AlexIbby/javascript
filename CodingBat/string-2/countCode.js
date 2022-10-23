function countCode(str){
  
  let count = 0
  
  if (str.length <= 3){
    return 0
  }
  
  for (let i = 0; i < str.length; i++){
  
    let x = str.slice(i, i+4)
    
    if (x === "code"){
      count += 1
      
    }else if ((x.slice(0,2) === "co") && (x.slice(3,5) == "e")){
    count +=1 
    }
  
  }
  
  
  return count 
}