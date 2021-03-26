const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let canvasHeight = window.innerHeight;
let canvasWidth = window.innerWidth;
canvas.height = canvasHeight;
canvas.width = canvasWidth;

canvas.style.background = "#ff8";

class Circle {
  constructor(xpos, ypos, radius, color) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
  }
  draw(context) {
    context.beginPath();
    context.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = circleColor;
    context.fill();
    context.lineWidth = 5;
    context.stroke();
    context.closePath();
  }
}
var colorArray = ["red", "green", "yellow", "blue", "pink", "brown", "orange"];
let circleColor = colorArray[Math.floor(Math.random() * 7 + 1)];
let allCircle = [];
let createCircle = function (circle) {
  circle.draw(context);
};
for (let i = 0; i < 10; i++) {
  setInterval(() => {
    let randomXpos = Math.floor(Math.random() * 600);
    let randomYpos = Math.floor(Math.random() * 600);
    let randomRadius = Math.floor(Math.random() * 100);
    let myCircle = new Circle(
      randomXpos,
      randomYpos,
      randomRadius,
      circleColor
    );
    allCircle.push(myCircle);
    createCircle(allCircle[i]);
  }, 100);
}
