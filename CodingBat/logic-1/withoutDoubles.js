function withoutDoubles(die1, die2, noDoubles){
   
  if (noDoubles === true){
  
    if (die1 != die2){
    
      return die1 + die2
    }
    
    
    if (die1 === die2){
    
      if (die1 === 6){
      
          return 7
        
      }else{
        
        die1 += 1
        return die1 + die2
      }
      
      
    }
    
  }
  
 if (!noDoubles){
 
   return die1 + die2
 }
  
  
}