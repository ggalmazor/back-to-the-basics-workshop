class Person {
  constructor(name) {
    this.name = name;
  }

  greet(otherName) {
    console.log(`Hi, ${otherName}! I'm ${this.name}`);
  }
}

const guille = new Person("Guillermo");

guille.greet("Javier");

/* 

console.dir(guille);
console.dir(guille.__proto__, { showHidden: true, depth: 0 });
console.dir(guille.__proto__.__proto__, { showHidden: true, depth: 0 });
console.dir(guille.__proto__.__proto__.__proto__);

//guille.constructor("bar");
//guille.constructor.call({}, "baz");
//Person("foo");

*/
