// remove str duplicatnts
// var str = "abbbbccdddeeeeeaa";

// console.log(removeDups(str));
// function removeDups(str) {
//   for (let i = 0; i < str.length; i++) {}
// }

// roman letters
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together.
//  12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
//  However, the numeral for four is not IIII. Instead, the number four is written as IV.
//  Because the one is before the five we subtract it making four.
//  The same principle applies to the number nine, which is written as IX.
//  There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// const s = "MCMXCIV";
// const romanToInt = (s) => {
//   const integers = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   };

//   return s.split("").reduce((acc, item, idx, arr) => {
//     return integers[arr[idx]] < integers[arr[idx + 1]]
//       ? acc - integers[item]
//       : acc + integers[item];
//   }, 0);
// };

// console.log("res:", romanToInt(s));

// LONG COMMON PREFIX
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// const res = getCommonPrefix(strs);
// console.log("res:", res);

// function getCommonPrefix(strs) {
//   strs.sort();
//   const chars = strs.reduce((acc, item, idx) => {
//     if (acc.length && acc[idx] === strs[idx + 1]) {
//       acc[idx] = item.charAt(0);
//     } else {
//       acc[idx] = item.charAt(0);
//     }
//     return acc;
//   }, []);

//   console.log(chars);

//   // console.log(common);

//   // return common;
// }
// const res = getCommonPrefix(strs);
// console.log("res:", res);

// function getCommonPrefix(strs) {
//   let stack = [];

//   strs.forEach((str) => {
//     var currChat = str.charAt(0);
//     if (stack.length && stack[stack.lneght - 1] === currChat) {
//       stack.push(currChat);
//     } else if (stack.at(-1) !== currChat) {
//       stack.pop();
//       stack.push(currChat);
//     } else {
//       stack.push(currChat);
//     }
//   });
//   console.log(stack);

//   return stack.length > 1 ? stack[0] : "";
// }

// const mails = [
//   { tab: "inbox", content: "some content" },
//   { tab: "inbox", content: "some content" },
//   { tab: "sent", content: "some content" },
//   { tab: "trash", content: "some content" },
//   { tab: "draft", content: "some content" },
//   { tab: "important", content: "some content" }
// ];
// console.log("ok");

// const labels = mails.reduce((acc, curr) => {
//   let { tab } = curr;
//   console.log(tab);

//   acc[tab] = acc[tab] ? acc[tab] + 1 : 1;
//   return acc;
// }, {});

// console.log(labels);

// var str = "SOME UPPARE CASE STR";
// var str = "someMIX G hghg GY fddFFF";
// var res = isUpperCase(str);
// console.log(res);

// function isUpperCase(str) {
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char.toUpperCase() !== char) return false;
//   }
//   return true;
// }

// var lands = [
//   "OXOOO",
//   "OOXXX",
//   "OXXOO",
//   "XOOOO",
//   "XOOOO",
//   "XXXOO",
//   "XOXOO",
//   "OOOXO",
//   "OXOOX",
//   "XOOOO",
//   "OOOXO"
// ];

// countLand(lands);
// function countLand(lands) {
//   var landCount = 0;
//   lands.forEach((item) => {
//     for (let i = 0; i < item.length; i++) {
//       const land = item[i];
//       if (land) landCount++;
//     }
//   });
//   console.log(landCount);
// }

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// var str = "(())((()())())";
// console.log(getpairs(str));
// function getpairs(str) {
//   var pri = "(";
//   var sec = ")";
//   if (str.charAt(0) !== pri && str.charAt(str.length - 1) !== sec) return false;
//   for (let i = 0; i < str.length; i++) {
//     var char = str.charAt(i);
//     var charAtLast = str.charAt(str.length - i - 1);
//     console.log("char", char);
//     console.log("charatlast", charAtLast === sec);
//     if (char !== pri || charAtLast !== sec) return false;
//     str = str.substring(i, str.length - i - 1);
//     // console.log(str);

//     // if (char === pri && charAtLast) return false;
//   }
// }

var args = [1, 2, 3, 4];
sum(...args);
function sum() {
  return Object.values(arguments).reduce((acc, curr) => acc + curr);
}
