import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>classes ES6!</h1>
<div>
 <canvas width="500" height="500" ></canvas>
</div>
`;

var gCanvas = document.querySelector("canvas");
var gCtx = gCanvas.getContext("2d");

class shape {
  constructor(name, width, height, fillcolor) {
    (this.name = name),
      (this.width = width),
      (this.height = height),
      (this.fillcolor = fillcolor);
  }

  get description() {
    return `this shape is with color: 
    ${this.fillcolor}`;
  }
  set color(value) {
    this.fillcolor = value;
  }
  printShape() {
    console.log(gCtx);
  }
}

const shape1 = new shape("rect", 100, 500, "red");
// shape1.color = "black";
console.log(shape1.printShape());
