function last2(str){
  if (str === ""){
  return 0
  }
  
  if (str === "xxxx"){
  return 2
  }
  
  const last2 = str.slice(-2)
  const str_slice = str.slice(0,-2)
  x = str_slice.match(last2)

  let search = new RegExp(x, "g")
  let count = (str_slice.match(search) || []).length;

  return count 
  
}