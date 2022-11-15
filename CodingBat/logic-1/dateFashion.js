function dateFashion(you, date){
 // 0 = no
 // 1 maybe
 // 2 = yes
  
  if ((you <=2) || (date <= 2)){
    return 0
  }else if ((you >= 8) || (date >= 8)){
    return 2
  }else{
    return 1
  }
  
  
}