//voice assistant 🤖!

let inPutName = "";
let toDoList = [];
function getReply(command){
   
      let inputValue = command.split(" ") 
      if (command.includes("Hello my name is ")) {
        if ( inPutName===  inputValue[ inputValue.length - 1]) {
            return `Your are already registered.`
        } else {
            inPutName = inputValue[ inputValue.length - 1];
            return `Nice to meet you ${inPutName}.`;
        }
          }  if (command === "What is my name") {
             if (!inPutName) {
             return `your name is not registered yet`;
        }   else {
            return `Your name is ${inPutName}.`;
        }
    }
          if (command === "Add fishing to my todo") {
          toDoList.push("Fishing");
          return `Fishing added to my todo`;
    }
          if (command === "Add singing in the shower to my todo") {
          toDoList.push("singing in the shower");
          return `Singing during shower added to my todo`;
    }
    
        if (command === "Remove fishing from my todo") {
            let fishingIndex = toDoList.indexOf("Fishing");
            if (fishingIndex < 0) {
                return `Item is missing in list.`;
            }
            toDoList.splice(fishingIndex, 1);
            return `Removed fishing from my todo`;

        }
            if (command === "What is on my todo?") {
            const inPut = toDoList.join(" and ")
            return `You have ${toDoList.length} on your todo list: ${inPut}`;
        }
            if(command ==="What day is it today?") {
            let monthsOfYear = ["January","Febrauary","March","April","May","June","July","August","September","October","November","December"];
            let month = new Date().getMonth();
            month = monthsOfYear[month];
            return `${new Date().getDate()} of ${month} ${new Date().getFullYear()}`;
 }
            if (/[+/%-*]/.test(command)){
            const mathValue = command.replace(/[A-Za-z?]/gi,"");
            return eval(mathValue);
}
            if(command ==="Set a timer for 4 minutes"){
            setTimeout(function(){ console.log("Timer done"); }, (4 * 60 * 1000));
            return `Timer set for 4 minutes`;               
}
}


console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("Hello my name is Shan"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 4"));
console.log(getReply("What is 4 * 12"));
console.log(getReply("What is 12 / 4"));
console.log(getReply("What is 10 % 5"));
console.log(getReply("Set a timer for 4 minutes"));
