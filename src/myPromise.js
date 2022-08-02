document.getElementById("app").innerHTML = `
<h1>My promise</h1>

`;

class myPromise {
  contracture(cb) {
    this.cb = cb(this.resolve, this.reject);
    this.status = "pending";
  }

  resolve(val) {
    status = "fullfiled";
    return Promise.resolve({ status: this.status, result: val });
  }
  reject(val) {
    status = "reject";
    const errorMsg = "this is an error message";
    return Promise.reject({ status: this.status, result: val || errorMsg });
  }
  // cb(resolve, reject) {
  //   resolve = this.resolve;
  //   reject = this.reject;
  //   return this.status === "reject" ? reject : resolve;
  // }
}
// function getingPromise() {
//   return myPromise.resolve(10);
//   return new myPromise((resolve, reject) => {
//     resolve(10);
//   });
// }

function promise(fn) {
  return (fn = (resolve, reject) => {
    resolve = (val) => {
      console.log("sesolve", val);
    };
    reject = (val) => {
      console.log("sesolve", val);
    };
  });
}

const prm = new myPromise();
console.log(prm);
