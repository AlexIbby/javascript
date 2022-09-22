function countXX(str){
index1 = 0
index2 = 2
let count = 0

while (index2 < (str.length + 1)) {
  let match = str.slice(index1, index2) 
  if (match === "xx"){
    count +=1 
    index1 += 1
    index2 += 1
    match = str.slice(index1, index2)
    
  }else if (match != "xx"){
    index1 += 1
    index2 += 1
    match = str.slice(index1, index2)
  }
}
  console.log(count)
  return count 
  
  }
