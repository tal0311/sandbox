// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <div>
// <p>
//   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla
//   nobis deleniti, quia deserunt soluta esse sint corporis temporibus
//   sequi, velit voluptatem necessitatibus laboriosam quaerat tenetur
//   nesciunt enim eaque officia.
// </p>

// <input type="text" name="txt1"/>
// <input type="color" name="color1" />
// <input type="checkbox" name="check1"/>
// </div>
// <div id="canvas-container"></div>
// `;
// var state;

// var eventList = ["click", "resize", "scroll"];

// onInit();
// function onInit() {
//   state = getState();
//   createCanvas();
//   addEvents(eventList);
//   console.log("state:", state);
// }

// function getState() {
//   return {
//     height: document.activeElement.clientHeight,
//     width: document.activeElement.clientWidth,
//     route: window.location.pathname,
//     qParams: window.location.search,
//     userMouseActions: {},
//     userInputActions: {}
//   };
// }

// function createCanvas() {
//   var canvasContainer = document.querySelector("#canvas-container");
//   canvasContainer.innerHTML = `<canvas class="doc"
//   height="${state.height}" width="${state.width}"></canvas>`;
// }

// function addEvents() {
//   eventList.forEach((event) => {
//     document.addEventListener(event, onMouseEvent);
//   });
//   const elnputs = Array.from(document.querySelectorAll("input"));
//   elnputs.forEach((input) => {
//     input.addEventListener(oninput, onInputEvent);
//   });
// }

// function onMouseEvent(ev) {
//   if (ev.target.nodeName === "INPUT") return;
//   console.log(ev);
// }

// function onInputEvent(ev) {
//   ev.stopPropagation();
//   console.log(ev);
// }

// function createMouseEvent(ev) {
//   return {
//     type: ev.type,
//     target: ev.target,
//     timeStamp: ev.timeStamp,
//     clientX: ev.clientX,
//     clientY: ev.clientY
//   };
// }
