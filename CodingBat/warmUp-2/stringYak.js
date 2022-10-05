function stringYak(str){
  index1 = 0
  index2 = 3
  let str_slice = str.slice(index1, index2)

  // check min str length 
  if (str.length < 3){
    return str 
  }

  let new_str  = str.replace(/yak/g,"")

  return new_str
  
}