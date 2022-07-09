import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Promises!</h1>

<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// Promise
// function getPromise() {
//   const result = failSometimes();
//   return new Promise((resolve, rejected) => {
//     if (result) resolve("promise resolve");
//     rejected("try again");
//   });
// }

function fetchY() {
  return setTimeout(() => {
    return new Promise((resolve) => {
      return resolve(10);
    });
  }, 3000);
}
console.log("y:", fetchY());

// function failSometimes() {
//   return Math.random() > 0.5 ? true : false;
// }

// getPromise()
//   .then((res) => res)
//   .then((res) => console.log('res:', (res += '!!')))
//   .catch((error) => console.log(error))
//   .finally(() => console.log('always:', printSomeValue()))

// function printSomeValue() {
//   return "some value";
// }

// function getAllPromises() {
//   const prms = [
//     Promise.resolve("one"),
//     Promise.reject("two"),
//     Promise.resolve("three")
//   ];

//   return prms;
// }

// Promise.all(getAllPromises())
//   .then((results) => console.log(results))
//   .catch((error) => console.log("failed at All:", error));

// ANY
// Promise.any(getAllPromises())
//   .then((results) => console.log("any:", results))
//   .catch((error) => console.log("failed at:", error));

// ALLSETTLED

// Promise.allSettled(getAllPromises())
//   .then((res) => {
//     res.forEach((prm) => {
//       if (prm.status === "fulfilled") console.log(prm);
//     });
//   })
//   .catch((error) => console.log(error));

// IN CONSOLE
// {status: 'fulfilled', value: 'one'}
// {status: 'fulfilled', value: 'three'}
