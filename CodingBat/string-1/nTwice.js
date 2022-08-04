function nTwice(str, n){
  
  if (n === 0){
    return ""
  }
  
  
  let a = str.slice(0,n)
  let x = n * -1
  let b = str.slice(x)
  
  return a + b
}