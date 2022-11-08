function gHappy(str){
  
  let gCount = 0
  let noG = 0
  
  if (str === ""){
  
    return true
  }
  
  if (str.length <= 1){
      return false 
    }
  
  
  
  
  for (let i = 0 ; i < str.length; i++){
    
      if ((str[i] === "g") && (str[i + 1] === "g")){
        
          gCount += 1
          
        }else if ((str[i] === "g") && (str[i + 1] != "g")){
          
            noG += 1 
          }
    }
   
  
  if ((str.slice(-1) === "g") && (str.slice(-2,-1) != "g")){
   
    return false
    
  }
  
  if (gCount == noG){
    
      return true
    }else if (gCount >= noG){
        return true
      }else{
        return false
      }



}