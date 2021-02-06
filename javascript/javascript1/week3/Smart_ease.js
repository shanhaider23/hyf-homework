const notes = [];

function saveNote(content, id) {
    let writeNotes = { content: content, id: id }
    notes.push(writeNotes);
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("cleaning", 3);

console.log(notes);

function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (id === notes[i].id) {
            return notes[i];
          
        };
        
    }

    return `This id=${id} is not valid.`;
}
  const firstNote = getNote(4);
  console.log(firstNote); // {content: 'Pick up groceries', id: 1}

  function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id:${notes[i].id}, has the following note text: ${notes[i].content}`);
    }
};

logOutNotesFormatted();

//Smart phone usage app

const activities = [];
function addActivity(date, activity, duration) {
    if (typeof date === "string" && typeof activity === "string" && typeof duration === "number")
    activities.push({ date: date, activity: activity, duration: duration })
    else {
        return console.log(`Invalid Info`);
        }
}

addActivity("23-07-2019", "Youtube", 30);
addActivity("23-07-2019", "Instagram", 40);
addActivity("23-07-2019", "HBO Nordic", 60);
addActivity('', '', '');
console.log(activities);
function showStatus(value) {
    let totalDuration = 0;
   
    for (i = 0; i < value.length; i++) {
        totalDuration += value[i].duration;

    }
    if (totalDuration > 100) {
        console.log(`You have reached the limit`);
    }
  
    console.log(`You have added ${value.length} activities. They amount to ${totalDuration } min of usage`)
}
showStatus(activities);
