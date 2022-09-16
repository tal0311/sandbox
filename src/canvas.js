import "./styles.css";

window.onTextChange = onTextChange;

var app = (document.getElementById("app").innerHTML = `
<h1>Canvas API</h1>
<section class="control-panel">
<label for="">
  text input
  <input type="text" name="text" oninput="onTextChange(this.value)" />
</label>
</section>
<section  class="canvas-container">
  <canvas width="600 height="400" id="canvas" ></canvas>
</section>

  `);

init();
var gCanvas;
var gCtx;
function init() {
  gCanvas = document.querySelector("#canvas");
  gCtx = gCanvas.getContext("2d");
  console.log(canvasService);
}

function onTextChange(txt) {
  console.log(txt);
  setTxt(txt);
}
