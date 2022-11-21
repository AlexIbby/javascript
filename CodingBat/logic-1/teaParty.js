function teaParty(tea, candy){
  
  let bad = 0
  let good = 1
  let great = 2
  
  if ((tea < 5) || (candy < 5)){
    return bad 
  }
  
  if ((tea / 2 >= candy) || (candy / 2 >= tea)){
    
    return great 
  }
  
  if ((tea >= 5 ) && (candy >= 5)){
  
    return good 
  }
  
  
  
  
}