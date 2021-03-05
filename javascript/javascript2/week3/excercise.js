//1-The warmup is a little abstract
setTimeout(() => {
  console.log("called after 2.5 seconds");
}, 2.5 * 1000);
// 2- Create a function that takes 2 parameters

function getMessageDelay(message, delay) {
  return message, delay;
}
getMessageDelay(
  setTimeout(() => {
    console.log("The string logged after 3 seconds");
  }, 3 * 1000)
);
getMessageDelay(
  setTimeout(() => {
    console.log("The string logged after 5 seconds");
  }, 5 * 1000)
);
//3-Create a button in html.
const button1 = document.getElementById("btn");
button1.addEventListener("click", () => {
  setTimeout(() => {
    alert("Called after 5 seconds");
  }, 5000);
});
//4
const earthLogger = function () {
  console.log("earth");
};
const saturnLogger = function () {
  console.log("saturn");
};

function planetLogFunction(value) {
  return value();
}
console.log(planetLogFunction(earthLogger));
console.log(planetLogFunction(saturnLogger));
//5

let loc = document.getElementById("displayLocation");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    loc.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  loc.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
//7 -
function runAfterDelay(delay, callback) {
  setTimeout(() => {
    return callback();
  }, delay * 1000);
}
runAfterDelay(4, () => console.log("Should be logged after 4 seconds"));
//8
document.getElementById("click").addEventListener("dblclick", clickFunction);
function clickFunction() {
  setTimeout(() => {
    document.getElementById("click").innerHTML = "I was double-clicked!";
  }, 500);
}
//9
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  logFunnyJoke = function () {
    console.log("Funny joke");
  };
  logBadJoke = function () {
    console.log("Bad joke");
  };
  if (shouldTellFunnyJoke == true) {
    return logFunnyJoke();
  } else {
    logBadJoke();
  }
}
jokeCreator(true);
jokeCreator(false);
