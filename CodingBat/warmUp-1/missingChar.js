function missingChar(str, n){
  let x = str[n]
  let newstr = str
  newstr = newstr.replace(x,"")
  return newstr
  
}