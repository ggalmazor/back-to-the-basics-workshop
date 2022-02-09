function Person(name) {
  console.dir(this);
  this.name = name;
}

Person.prototype.greet = function (otherName) {
  console.log(`Hi, ${otherName}! I'm ${this.name}`);
};

const guille = new Person("Guillermo");

guille.greet("Javier");

/* 

console.dir(guille);
console.dir(guille.__proto__, { showHidden: true, depth: 0 });
console.dir(guille.__proto__.__proto__, { showHidden: true, depth: 0 });
console.dir(guille.__proto__.__proto__.__proto__);

/*

guille.constructor("bar");
console.log(guille);

const javier1 = guille.constructor.call({}, "Javier");
console.log(javier1);

const javier2 = Person("Javier");
console.log(javier2);
console.log(name);

*/
