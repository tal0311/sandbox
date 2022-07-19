import "./styles.css";

var app = (document.getElementById("app").innerHTML = `
<h1>The navigator object</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <br>
  <span>clipme</span>
  <audio id="audio" controls></audio>
  <br>
  <video width="200" height="200" id="video"></video>
  <canvas width="200" height="200" id="canvas" ></canvas>
  `);

const myNavigator = {
  getProperties() {
    const msg = `*positiion will return a promise with location \n
    *battry will get you is charging and battery level \n
    *media will take a options for media { audio: bolean, video: bolean } and attributes object \n
    const videoAttributes = {
      controls: false,
      autoplay: true
    };
     for displaying the video you will need a <video> with #video \n
     *captureImg will able u to capture a media strem to vanvas. you will need a <video id="video"> element and a <canvas id="canvas"> element.\n
     you can activate myNavigator.capture() with a click event
    `;
    console.log(msg);
  },
  battry() {
    return navigator.getBattery().then((res) => {
      return {
        isCharging: res.charging,
        BatteryLevel: res.level * 100 + "%"
      };
    });
  },

  position() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  },
  media(options, attributes) {
    return new Promise((resolve, reject) => {
      navigator.mediaDevices.getUserMedia(options).then((stream) => {
        if (options.video) {
          const video = document.querySelector("#video");
          if (attributes.controls) video.setAttribute("controls", "true");
          if (attributes.autoplay) video.setAttribute("autoplay", "true");
          video.srcObject = stream;
        }
        if (options.audio) {
          console.log("sudio");
          const mediaStrem = new MediaRecorder(stream);
          console.log(mediaStrem);
          resolve({
            start(time) {
              mediaStrem.start(time);
            },
            stop() {
              mediaStrem.stop();
            }
          });
        }
      });
    });
  },
  captureImg() {
    const video = document.querySelector("#video");
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.clientHeight, canvas.clientWidth);
  }
};

// const clip = document.querySelector("span");
// clip.addEventListener("click", clipMe);

const options = {
  video: false,
  audio: true
};

// myNavigator.position().then((loc) => console.log(loc));
// myNavigator.battry().then((bat) => console.log(bat))
const attributes = {
  controls: false,
  autoplay: true
};
const object = myNavigator.media(options, attributes).then((res) => res);

const recording = object.then((res) => {
  res.start(5000);
});

const record = new Blob();
