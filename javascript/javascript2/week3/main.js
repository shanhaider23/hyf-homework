let playerS = 0;
let playerL = 0;
const presser = function (e) {
  if (e.key == "l") {
    playerL++;
    document.getElementById("countL").innerText = playerL;
  } else if (e.key == "s") {
    playerS++;
    document.getElementById("countS").innerText = playerS;
  }
};

const inputTime = function () {
  return document.getElementById("inputnumber").value;
};

document.getElementById("btn1").addEventListener("click", function () {
  document.querySelector("body").addEventListener("keydown", presser);
  const gameTime = setTimeout(() => {
    document.querySelector("body").removeEventListener("keydown", presser);
    if (playerL > playerS) {
      document.getElementById("winnings").innerText = "Player (L) Won the game";
    } else if (playerS > playerL) {
      document.getElementById("winnings").innerText = "Player (S) Won the game";
    } else if (playerL == 0 && playerS == 0) {
      document.getElementById("winnings").innerText =
        "Please enter the time more than 0 seconds";
    } else {
      document.getElementById("winnings").innerText = "Game draw ";
    }
  }, 1000 * inputTime());
});
function refreshPage() {
  window.location.reload();
}
