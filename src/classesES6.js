import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>classes ES6!</h1>
<div>
 <canvas width="500" height="500" ></canvas>
</div>
`;

var gCanvas = document.querySelector("canvas");
var gCtx = gCanvas.getContext("2d");

class Shape {
  constructor(width, height, fillcolor) {
    (this.width = width), (this.height = height), (this.fillcolor = fillcolor);
  }

  get description() {
    return `this shape is with color: 
    ${this.fillcolor}`;
  }
  set color(value) {
    this.fillcolor = value;
  }
  printRect(x, y) {
    // console.log(gCtx);
    console.log(x, y);
    gCtx.strokeStyle = this.fillcolor;
    gCtx.strokeRect(x, y, this.width, this.height);
  }
  printTxt(txt, x, y) {
    gCtx.font = "50px serif";
    gCtx.strokeText(txt, x, y, gCanvas.width);
  }
}

// const shape1 = new shape("rect", 100, 100, "red");
// // shape1.color = "black";
// console.log(shape1.printShape(100, 100));

class Rect extends Shape {
  constructor(shapename, width, height, fillcolor) {
    super(width, height, fillcolor);
  }
}

class Txt extends Shape {
  constructor(shapename, width, height, fillcolor) {
    super(width, height, fillcolor);
  }
}

const txt1 = new Txt("txt", 100, 100, "black");
console.log(txt1);
txt1.printTxt("hello world", 100, 250);

const rect1 = new Rect("rect", 100, 100, "red");
console.log(rect1.printRect(100, 100));
