// console.log(getOpt("time")); //this is the first value
// console.log(getOpt("date")); //Tue Jun 14 2022 23:19:54 GMT+0300 (Israel Daylight Time)
// console.log(getOpt("good")); // default

var critirea = {
  name: "mail",
  price: 39
};

var res = getOpt("name", "lala");

function getOpt(type, value) {
  var options = {
    name: (critirea.name = value),
    price(value) {
      console.log(critirea.price);
    },
    defulat: critirea
  };

  // console.log(options[type]);

  return options[type] ? options[type] : options["defulat"];
}

console.log(critirea);

// console.log(currRoute.fullPtah);
