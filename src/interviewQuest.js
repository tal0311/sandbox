// remove str duplicatnts
var str = "abbbbccdddeeeeeaa";

var mapChar = removeDups(str);

function removeDups(str) {
  return str.split("").reduce((acc, curr) => {
    acc[curr] ? (acc[curr] = acc[curr] + 1) : (acc[curr] = 1);
    return acc;
  }, {});
}

console.log(makeStr(mapChar));
function makeStr(mapChar) {
  const dups = [];
  const mat = Object.entries(mapChar);
  mat.map((entry) => {
    const length = entry[1] > 3 ? 3 : entry[1];
    for (let i = 0; i < length; i++) {
      dups.push(entry[0]);
    }
  });
  return dups.join("");
}
