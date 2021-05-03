console.log("inside warmup file1");

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    getDiameter = () => this.radius * 2;
    getCircumference = () => this.radius * 2 * Math.PI;
    getArea = () => this.radius * this.radius * Math.PI;

};

const circle1 = new Circle(10)
const circle2 = new Circle(7)
console.log(circle1.getDiameter());
console.log(circle1.getCircumference());
console.log(circle1.getArea());
console.log(circle2.getDiameter());
console.log(circle2.getCircumference());
console.log(circle2.getArea());