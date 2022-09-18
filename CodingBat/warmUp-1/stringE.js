function stringE(str){
  let count = 0
  let index = 0
  while (index < str.length){
  if (str[index] === "e"){
    count += 1
    index += 1
  }else{
    index += 1
  }
  }
  
  if (count >= 1 && count <= 3){
    return true 
  }else{
    return false
  }
}