function frontTimes(str, n){
  if (str.length < 3){
  return str.repeat(n)
  }else{
    x = str.slice(0,3)
    return x.repeat(n)
  }
}