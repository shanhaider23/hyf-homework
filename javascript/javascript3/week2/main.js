const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");
const redBoxLeft = parseInt(redBox.style.left);
const redBoxTop = parseInt(redBox.style.top);
const blueBoxLeft = parseInt(blueBox.style.left);
const blueBoxTop = parseInt(blueBox.style.top);
const greenBoxLeft = parseInt(greenBox.style.left);
const greenBoxTop = parseInt(greenBox.style.top);
const redTarget = { x: 20 - redBoxLeft, y: 300 - redBoxTop };
const blueTarget = { x: 400 - blueBoxLeft, y: 300 - blueBoxTop };
const greenTarget = { x: 400 - greenBoxLeft, y: 20 - greenBoxTop };
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const all = document.getElementById("all");
//translate one by one
async function translateOneByOne() {
  try {
    await moveElement(redBox, redTarget);
    red.innerHTML = `Red box moved`;
    await moveElement(blueBox, blueTarget);
    blue.innerHTML = `Blue box moved`;
    await moveElement(greenBox, greenTarget);
    green.innerHTML = `Green box moved`;
  } catch (error) {
    console.log(error.message);
  }
}
translateOneByOne();

//translate all at once
function translateAllAtOnce() {
  const allRedBox = moveElement(redBox, redTarget);
  const allBlueBox = moveElement(blueBox, blueTarget);
  const allGreenBox = moveElement(greenBox, greenTarget);
  Promise.all([allRedBox, allBlueBox, allGreenBox])
    .then(() => {
      all.innerHTML = `All the boxes moved together`;
    })
    .catch((err) => console.log(err));
}

//translateAllAtOnce()
