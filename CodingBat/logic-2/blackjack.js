function blackjack(a, b){
  
  // both over 21
  if ((a > 21) && (b > 21)){
  
    return 0
  }
  
  // either === 21
  if ((a === 21) || (b === 21)){
  
    return 21
  }
  
  
  //filter closest
  
  if ((a > 21) && (b <= 21)){
  
    return b
  }
  
  if ((b > 21) && (a <= 21)){
  
    return a
  }
  
  
  let aMinus = 21 - a
  let bMinus = 21 - b
  
  if (bMinus < aMinus){
  
    return b
  }else{
    return a
  }
  
  
}