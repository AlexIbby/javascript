function greenTicket(a, b, c){
  
  let allNumbers = new Set([a,b,c])
  
  if (allNumbers.size === 3){
      return 0
      
    }else if (allNumbers.size === 1){
      
        return 20
        
      }else{
          return 10
        }
  
}