function front3(str){
  if (str.length > 3){
     return str.slice(0,3) + str.slice(0,3) + str.slice(0,3) 
    }else if (str.length === 3){
      return str + str + str
    }else{
      return str + str + str
    }
  
}