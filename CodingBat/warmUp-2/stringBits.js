function stringBits(str){
  let first = 0
  let second = 1
  let new_str = ""
  let x = ""
  
  
  while (second < (str.length + 1)){
    x = str.slice(first, second)
    new_str = new_str.concat(x)
    first += 2
    second += 2
  }
  
  return new_str

}
