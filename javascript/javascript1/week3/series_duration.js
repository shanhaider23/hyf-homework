const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Mirza pur",
      days: 0,
      hours: 32,
      minutes: 0,
    },
    {
      title: "Paatal lok",
      days: 0,
      hours: 21,
      minutes: 0,
    },
  ];
  
function logOutSeriesText() {
    
    const totalLifeInHours = 700800;
    
    let fullDuration = 0;
    
    for (let i = 0; i < seriesDurations.length; i++) {
        
        let totalInHours = (seriesDurations[i].days * 24) + seriesDurations[i].hours;
        
        let totalPercentage = (totalInHours * 100) / totalLifeInHours;
        
        fullDuration = totalPercentage + fullDuration;
        
        console.log(`${seriesDurations[i].title} took ${totalPercentage.toFixed(3)}% of my life`);
    }
    console.log(`In total that is ${fullDuration.toFixed(3)}% of my life`)
};

logOutSeriesText();  