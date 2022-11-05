function wordEnds(str, word){
  
  let left = ""
  let right = ""
  
  let match_letters = []
  
  // grab left if needed
  if (str.startsWith(word) === true){
  
    left = str.slice((word.length), (word.length + 1))
  }
  
  // grab right if needed
  if (str.endsWith(word) === true){
  
    right = str.slice((word.length + 1) * -1, (word.length * -1))
  }
  
  
  
  for (let i = 0; i < str.length; i++){
    
    let check = str.slice(i , i + word.length + 2)
    
    if (check.slice(1,-1) === word){
      
        let matches = check[0] + check.slice(-1)
        match_letters.push(matches)
      }
    
  }
  
  match_letters = match_letters.join("")
  
  return left + match_letters + right
  
}