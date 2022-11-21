function fizzString(str){
  
  if ((str.slice(0,1) === "f") && (str.slice(-1) != "b")){
  
    return "Fizz"
    
  }else if ((str.slice(0,1) != "f") && (str.slice(-1) === "b")){
  
    return "Buzz"
    
  }else if ((str.slice(0,1) === "f") && (str.slice(-1) === "b")){
  
    return "FizzBuzz"
    
  }else{
  
  
    return str
  }
  
}