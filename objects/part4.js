class Person {
  #first_name;
  #last_name;

  constructor(first_name, last_name) {
    this.#first_name = first_name;
    this.#last_name = last_name;
  }

  greet(otherName) {
    console.log(`Hi, ${otherName}! I'm ${this.#getFullName()}`);
  }

  #getFullName() {
    return `${this.#first_name} ${this.#last_name}`;
  }

  #getName() {
    return this.#name;
  }
}

const guille = new Person("Guillermo");
guille.greet("Javier");

console.log(guille);

guille.getName = function () {
  return this.#name;
};
