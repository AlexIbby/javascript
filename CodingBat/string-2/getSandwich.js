function getSandwich(str){
  
  let regex = /bread[A-za-z]+bread/
  
  let match = str.match(regex)
  
  if (match === null){
      return "" 
    }
  
  if (match != null){
      let bread = match[0]
      bread = bread.slice(5,-5)
      return bread
      
      
    }
    
  
  
}