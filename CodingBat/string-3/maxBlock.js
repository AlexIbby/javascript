function maxBlock(str){
  
  if (str === ""){
      return 0
    }
    
  //if each char appears once, return 1
  let uniqueChar = str.split("")
  
  uniqueChar = new Set(uniqueChar)
  
  if (uniqueChar.size === str.length){
    
      return 1
    }
  
  // repeating chars
  let regex = new RegExp(/([^])\1+/g)
  let matches = str.match(regex)
  // sort matches 
  
  matches.sort(function(a, b){return b.length - a.length})
  
  
  return matches[0].length
}

