function Greeter2(name) {
  const log = msg => console.log(msg);

  const greet = otherName => log(`Hi, ${otherName}! I'm ${name}`);

  const sayGoodbye = () => log(`${name} out! Peace! 🎤`);

  return {greet, sayGoodbye};
}

const greeter = Greeter2("Guillermo");
greeter.greet("Javier");
greeter.sayGoodbye();

console.dir(greeter);
console.dir(greeter.__proto__);
console.dir(greeter.__proto__.__proto__);
