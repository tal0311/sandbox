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
    this.width = width;
    this.height = height;
    this.fillcolor = fillcolor;
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
  printTxt(x, y) {
    gCtx.font = "50px serif";
    const txt = this.txt;
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
  constructor(txt, width, height, fillcolor) {
    super(width, height, fillcolor);
    this.txt = txt;
  }

  get dimentiond() {
    return gCtx.measureText(this.txt);
  }
  printTxtOutline(x, y, color = "red") {
    const {
      width,
      fontBoundingBoxAscent: fontAscent,
      fontBoundingBoxDescent: fontDescent
    } = this.dimentiond;
    gCtx.strokeStyle = color;

    gCtx.strokeRect(
      x - fontDescent,
      y - fontAscent,
      width + fontDescent * 2,
      fontAscent
    );
  }
}

const txt1 = new Txt("new line 222", 100, 100, "black");
console.log(txt1);
txt1.printTxt(100, 250);
console.log(txt1.dimentiond);
const {
  width,
  fontBoundingBoxAscent: fontAscent,
  fontBoundingBoxDescent: fontDescent
} = txt1.dimentiond;
console.log(width);

const rect1 = new Rect("rect", 100, 100, "red");
// console.log(rect1.printRect(100, width - fontAscent));

// gCtx.strokeRect(
//   100 - fontDescent,
//   250 - fontAscent ,
//   width + fontDescent * 2,
//   fontAscent
// );
txt1.printTxtOutline(100, 250, "lightblue");
