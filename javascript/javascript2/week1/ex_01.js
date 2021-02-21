//Find the Shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function findShortestWord(arr) {
  return arr.reduce(function (shortest, e) {
    return typeof e == "string" &&
      (shortest == "" || e.length < shortest.length)
      ? e
      : shortest;
  }, "");
}

console.log(findShortestWord(danishWords));
//Find and count the Danish letters

const danishLetters = ["å", "ø", "æ"];
const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function findDanishLetters(string) {
  const result = {};
  let sum = 0;
  string = string.split("");
  for (i = 0; i < string.length; i++) {
    if (danishLetters.includes(string[i])) {
      result[string[i]];

      if (string[i] in result) {
        result[string[i]] += 1;
      } else {
        result[string[i]] = 1;
      }
      sum++;
    }
  }

  result.total = sum;
  return result;
}

console.log(findDanishLetters(danishString2));
console.log(findDanishLetters(danishString));
// Spirit animal name generator

const differentAnimals = [
  "Squirrel",
  "Tiger",
  "Chimpanzee",
  "Lion",
  "Panda",
  "Walrus",
];
const inputName = document.querySelector("#userName");
const entered = document.querySelector("#submit");
const outputAnimal = document.getElementById("writeAnimal");
const displayName = document.getElementById("userName");
displayName.addEventListener("mouseover", myFunction);
displayName.addEventListener("mouseout", mySecondFunction);
entered.addEventListener("click", getSpiritAnimalName);
function myFunction() {
  document.getElementById("writeAnimal").innerHTML += "Please Enter<br>";
}
function mySecondFunction() {
  document.getElementById("writeAnimal").innerHTML += "Thanks <br>";
}
function getSpiritAnimalName() {
  let userName = inputName.value;
  let index =
    differentAnimals[Math.floor(Math.random() * differentAnimals.length)];
  if (userName === "") outputAnimal.innerHTML = "Enter a valid name";
  else
    outputAnimal.innerHTML = `Spirit animal name of ${userName} is : ${index}`;
}
