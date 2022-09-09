function hasTeen(a, b, c){
  let x = 0
  if (a >= 13 && a <= 19)
  {
   x+= 1
  }if (b >= 13 && b <= 19)
  {
    x+=1 
  }if (c >= 13 && c <= 19){
    x += 1
  }if (x > 0){
    return true 
  }else{
    return false
  }
}