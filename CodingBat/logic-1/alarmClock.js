function alarmClock(day, vacation){
  
  let weekdays = [1,2,3,4,5]
  let weekend = [0,6]
  

  
  if ((weekdays.includes(day) === true) && (vacation === false)){
  
    return "7:00"
  }else if ((weekdays.includes(day) === true) && (vacation === true)){
    return "10:00"
    
  }else if ((weekend.includes(day) === true) && (vacation === false)){
    return "10:00"
    
  }else if ((weekend.includes(day) === true) && (vacation === true)){
  
    return "off"
  }
  
}