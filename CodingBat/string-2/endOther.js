function endOther(a, b){
  a = a.toLowerCase()
  b = b.toLowerCase()
  
  let aslice = a.length * -1
  let bslice = b.length * -1
  
  let checka = a.slice(bslice)
  let checkb = b.slice(aslice)
  
  if (checka === b){
    return true 
  }
  
  if (checkb === a){
    return true 
  }
  
  
  return false 
  
}