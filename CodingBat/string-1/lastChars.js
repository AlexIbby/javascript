function lastChars(a, b){
  x = a[0]
  y = b.slice(-1)
  
  if ((a === "") && (b === "")){
    return "@@"
  }
  
  if (a === "") {
  
    return "@" + y
  
  }
  
  
  if (b === ""){
  
    return x + "@"
  }
  
  return x + y
  
  
  }



}