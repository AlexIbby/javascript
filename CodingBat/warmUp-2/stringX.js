function stringX(str){
  let no_x = str.replaceAll("x","")
  
  if (str[0] === "x"){
    no_x = "x" + no_x
  }
  
  if (str.slice(-1) === "x"){
    no_x = no_x + "x"
    }
  
  return no_x
  
}