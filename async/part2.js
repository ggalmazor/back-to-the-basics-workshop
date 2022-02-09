const { sleep } = require("sleep");

console.log("a");

setTimeout(function () {
  console.log("b");
}, 1000);

sleep(2);

console.log("c");
