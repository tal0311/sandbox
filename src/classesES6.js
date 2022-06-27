import "./styles.css";

const gApp = document.querySelector("#app");

document.getElementById("app").innerHTML = `
<h1>classes ES6!</h1>
<div>
 <canvas width="500" height="500" ></canvas>
</div>
`;

var gCanvas = document.querySelector("canvas");
var gCtx = gCanvas.getContext("2d");

gCanvas.addEventListener("click", canvasClick);

function canvasClick({ offsetX: x, offsetY: y }) {
  var line = new Txt("new line", x, y);
  console.log(line);
}

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

class Rect extends Shape {
  constructor(shapename, width, height, fillcolor) {
    super(width, height, fillcolor);
  }
}

class Txt extends Shape {
  constructor(txt, x, y, fillcolor = "blue") {
    super();
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.fillcolor = fillcolor;
  }
  set txtValue(value) {
    this.txt += value;
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
