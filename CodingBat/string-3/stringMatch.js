function stringMatch(a, b){
  
  let aMatch = []
  let bMatch = []
  
  // matches for a string
  for (let i = 0; i < a.length; i++){
    
      let twoChar = a.slice(i, i + 2)
      let otherMatch = b.slice(i, i+2)
      
      if ((twoChar.length == 2) && (aMatch.includes(twoChar) === false) && (twoChar === otherMatch)){
        aMatch.push(twoChar)
        }
      
      
    }
  
  // matches for b string
  for (let j = 0; j < b.length; j++){
    
      let twoChar = b.slice(j, j + 2)
      
      if ((twoChar.length == 2) && (bMatch.includes(twoChar) === false)){
        bMatch.push(twoChar)
        }
    }
  

  
  
  //intersection between two arrays 
  const intersection = aMatch.filter(element => bMatch.includes(element));
  
  return intersection.length
  
  
}