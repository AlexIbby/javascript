function sleepIn(weekday, vacation){
    if (weekday && vacation !== true){
      return false
    }else{
      return true
    }
  } 


sleepIn(weekday, false)