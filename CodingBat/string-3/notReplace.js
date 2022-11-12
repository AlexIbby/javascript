function notReplace(str){
  
  regex = new RegExp(/\bis\b/,"g")
  
  str = str.replace(regex, "is not")
  
  return str
  
}