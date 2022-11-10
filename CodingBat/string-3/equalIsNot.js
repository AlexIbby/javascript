function equalIsNot(str){
  
  if (str.length < 2){
    return true
  }
  
  let is = RegExp("is","g")
  let not = RegExp("not","g")
  
  
  let isCount = str.match(is)
  let notCount = str.match(not)
  
  if ((isCount === null) && (notCount === null)){
    return true
  }
  
 
  
  if (isCount.length != notCount.length){
      return false
      
    }else{
        return true
      }
  
  
}