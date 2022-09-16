import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// console.log(func);
// func();

// function func() {
//   console.log(1);
//   setTimeout(() => console.log(2), 1000);
//   setTimeout(() => console.log(3), 0);
//   console.log(4);
// }

// const obj = {
//   res: 0,

//   sum(num1, num2) {
//     this.res = num1 + num2;
//     return this;
//   },
//   mult(num1, num2) {
//     return (this.res += num1 * num2);
//   }
// };

// console.log(obj.sum(2, 2).mult(2, 2));

// const strs = async (str) => str.split(",");
// const list = async (list) => list.map((item) => item.toLowerCase());
// // pipe([makeStrs, list], 'FIRST,SECOND').then(res => console.log(res))

// const pipe = async (fns, seed = undefined) => {};
// console.log("ok");

var names = {
  yotam: 2,
  tal: 0
};

var name = "yotam";

console.log(names[name]++);
console.log(names);
