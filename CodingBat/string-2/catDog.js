function catDog(str){
  let catCount = 0
  let dogCount = 0
  
  
  for (let i = 0; i < str.length; i++ ){
  
    let cat = str.slice(i, (i+3))
    let dog = str.slice(i, (i+3))

    if (cat === "cat"){
      catCount += 1
    }
    
    if (dog === "dog"){
      dogCount += 1
    }
  
  }
  
  if (catCount === dogCount){
    return true 
  }else{
  
    return false
  }
  
}