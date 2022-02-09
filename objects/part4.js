class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  greet(otherName) {
    console.log(`Hi, ${otherName}! I'm ${this.#name}`);
  }
}

const guille = new Person("Guillermo");
guille.greet("Javier");

console.log(guille);

/*

guille.getName = function () {
  return this.#name;
};

*/
