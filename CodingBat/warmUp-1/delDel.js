function delDel(str){
  if (str.slice(1,4) === "del"){
    return str[0] + str.slice(4)
  
  }else{
    return str
  }
}