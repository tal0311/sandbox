import "./styles.css";

document.getElementById("app").innerHTML = `
<div>
<p>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla
  nobis deleniti, quia deserunt soluta esse sint corporis temporibus
  sequi, velit voluptatem necessitatibus laboriosam quaerat tenetur
  nesciunt enim eaque officia.
</p>

<input type="text" />
</div>
<div id="canvas-container"></div>
`;
var state;

var eventList = ["click", "keyup", "resize", "scroll", "fullscreenchange"];

onInit();
function onInit() {
  state = getState();
  createCanvas();
  addEvents(eventList);
  console.log("state:", state);
}

function getState() {
  return {
    height: document.activeElement.clientHeight,
    width: document.activeElement.clientWidth,
    route: window.location.pathname,
    qParams: window.location.search,
    userActions: []
  };
}

function createCanvas() {
  var canvasContainer = document.querySelector("#canvas-container");
  canvasContainer.innerHTML = `<canvas class="doc" height="${state.height}" width="${state.width}"></canvas>`;
}

function addEvents() {
  eventList.forEach((event) => {
    document.addEventListener(event, onEvent);
  });
}

function onEvent(ev) {
  console.log(ev);
  let { userActions } = state;
  if (ev.target === "input") {
    console.log(ev.target);
    var inputAction = createEvent(ev);
    console.log(inputAction);
    return;
  }
  var userInputAction = createInputEvent(ev);
  var userAction = createEvent(ev);
  // userActions.push(userAction)
  state.userActions = [...userActions, userAction];
  console.log(state.userActions);
}

function createInputEvent(ev) {
  return {
    type: ev.type,
    target: ev.target.value,
    timeStamp: ev.timeStamp
  };
}
function createEvent(ev) {
  return {
    type: ev.type,
    target: ev.target,
    timeStamp: ev.timeStamp,
    clientX: ev.clientX,
    clientY: ev.clientY
  };
}
