function deFront(str){
  
  // str === ab
  if (str === "ab"){
     return str
  }
 
  // no a/b str length 2
  
  if (str.length === 2){
  
    if ((str.slice(0,1) != "a") && (str.slice(1,2) != "b")){
      return ""
    }
  }
  
  // str === a?
  
  if ((str.slice(0,1)) === "a" && (str.length === 2)){
  
    return "a"
  }
  
  // str === ?b
  if ((str.slice(1,2)) === "b" && (str.length === 2)){
  
    return "b"
  }
  
  // a start , length 3 or more
  
  if (str.length >= 3){
    
    if ((str.slice(0,1) === "a") && (str.slice(1,2) != "b")){
    
      return str.slice(0,1) + str.slice(2)
    }
  
  }
  
  // b start , length 3 or more
  
  if (str.length >= 3){
    
    if ((str.slice(0,1) != "a") && (str.slice(1,2) === "b")){
    
      return str.slice(1,2) + str.slice(2)
    }
  
  }
  
  
  // neither a/b start, length 3 or more 
  if ((str.slice(0,2) != "ab") && (str.length >=3)){
    return str.slice(2)
  }
  
  // ab start, length 3 or more 
  if ((str.slice(0,2) === "ab") && (str.length >= 3)){
    return str
  
  }
  
  
  
  
  
  
  
  
}