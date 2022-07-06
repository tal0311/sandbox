// console.log(getOpt("time")); //this is the first value
// console.log(getOpt("date")); //Tue Jun 14 2022 23:19:54 GMT+0300 (Israel Daylight Time)
// console.log(getOpt("good")); // default

var currRoute = {
  path: "mail",
  tab: "",
  get fullPtah() {
    return this.path + "/" + this.tab;
  }
};

var res = getOpt("lla");
console.log(res);

// getOpt("setTub")("sent");

function getOpt(type) {
  var options = {
    setName(value) {
      currRoute.path = value;
    },
    setTub(value) {
      currRoute.tab = value;
    },
    defulat: currRoute
  };

  // console.log(options[type]);

  return options[type] ? options[type] : options["defulat"];
}

// console.log(currRoute.fullPtah);
