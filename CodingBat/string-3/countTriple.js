function countTriple(str){
  
  let tripleCount = 0
  
  for (let i = 0; i < str.length; i++){
  
    let triple = str.slice(i, i + 3)
    
    if ((triple[0] === triple[1]) && (triple[1] === triple[2])){
    
      tripleCount += 1
    }
    
  }
  
  return tripleCount 
  
}