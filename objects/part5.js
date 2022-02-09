function Greeter(name) {
  return function (otherName) {
    console.log(`Hi, ${otherName}! I'm ${name}`);
  };
}

const greetAsGuille = Greeter("Guillermo");
greetAsGuille("Javier");

console.dir(greetAsGuille);
console.dir(greetAsGuille.__proto__, { showHidden: true, depth: 0 });
console.dir(greetAsGuille.__proto__.__proto__);
console.dir(greetAsGuille.__proto__.__proto__.__proto__);
