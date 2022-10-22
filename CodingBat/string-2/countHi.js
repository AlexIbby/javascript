function countHi(str){
  let count = 0
  
  for (let i = 0; i < str.length; i++){
  
    let x = str.slice(i , (i +2))
    
    if (x === "hi"){
    
      count += 1
    }
  
  }
  
  return count
  
}