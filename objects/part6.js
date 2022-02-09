function Greeter2(name) {
  function log(msg) {
    console.log(msg);
  }

  function greet(otherName) {
    log(`Hi, ${otherName}! I'm ${name}`);
  }

  function sayGoodbye() {
    log(`${name} out! Peace! 🎤`);
  }

  return { greet, sayGoodbye };
}

const greeter = Greeter2("Guillermo");
greeter.greet("Javier");
greeter.sayGoodbye();

console.dir(greeter);
console.dir(greeter.__proto__);
console.dir(greeter.__proto__.__proto__);
