document.getElementById("app").innerHTML = `
<h1>My promise</h1>

`;

class myPromise {
  contracture() {
    this.status = "pending";
  }
  resolve(val) {
    this.status = "fullfiled";
    return { status: this.status, result: val };
  }
  reject(val) {
    this.status = "fullfiled";
    return { status: this.status, result: val };
  }
}
