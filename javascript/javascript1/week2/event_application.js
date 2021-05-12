const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
  let today = new Date();
  function getEventWeekday(eventDay) {
    let futureDate = (eventDay + today.getDay()) % 7;
    return weekdays[futureDate];
  }
  
  console.log(`The event will be held on ${getEventWeekday(11)}`);