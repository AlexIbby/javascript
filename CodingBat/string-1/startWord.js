function startWord(str, word){
  
  let wordMatch = word.slice(1)
  
  let strMatch = str.slice(1, wordMatch.length + 1)
  
  if (wordMatch === strMatch){
  
    return str.slice(0, word.length)
  }else{
    return ""
  }
  
  
  
}