const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function timeInfo(){
    const time = travelInformation.destinationDistance / travelInformation.speed;
    const hours = Math.floor(time);
    const min = Math.floor((time - hours) * 60);
    return `${hours} hours and ${min} minutes.`
  }
  
  const travelTime = timeInfo();
  console.log(travelTime); // 4 hours and 42 minutes
  document.write(travelTime);