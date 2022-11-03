function starOut(str){
  
  if (str === "*"){
    return ""
  }
  
  const regex1 = /[\D]\*+[\D]/g
  const regex2 = /[\D]\*/g
  const regex3 = /\*[\D]/g
  
  
  str = str.replace(regex1, "")
  str= str.replace(regex2,"")
  str= str.replace(regex3,"")
  
  return str
  
}