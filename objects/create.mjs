const personPrototype = {
  greet(otherName) {
    console.log(`Hi, ${otherName}, I'm ${this.name}`);
  }
};

function Person(name) {
  return Object.create(personPrototype,
    {
      name: {writable: false, configurable: false, enumerable: true, value: name}
    }
  )
}

const oscar = Person('Oscar');

console.dir(oscar)
console.dir(oscar.__proto__)



