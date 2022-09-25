function everyNth(str, n){
let first = 0
let second = 1
let x = undefined 

new_str = str.slice(first,second)

  while (second < (str.length + 1)){
    first += n
    second += n
    x = str.slice(first,second)
    new_str = new_str.concat(x)
  }

return new_str