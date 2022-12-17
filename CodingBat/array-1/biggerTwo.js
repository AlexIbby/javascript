function biggerTwo(a, b){
  
  let currentValue = 0
  
  let aSum = a.reduce(function(sum, item){
    return sum + item
  }); 
  
  let bSum = b.reduce( function(sum, item){
    
      return sum + item
    });
    
  
  if (aSum > bSum){
    
      return a
      
    }else if (bSum > aSum){
      
        return b
        
      }else{
          return a
        }
  
}