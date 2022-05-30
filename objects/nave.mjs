class Ship {
  constructor(name, life) {
    this.life = life;
  }

  takeHit(damage) {
    return new Ship(this.life - damage);
  }
}

let ships = [
  new Ship('a', 10),
  new Ship('b', 10),
  new Ship('c', 10),
  new Ship('d', 10),
  new Ship('e', 10)
];

function loop() {
    // damage computation
  ships = ships.map(ship => {

    if (ship.name === 'a')
      return ship.takeHit(1);

    return ship;
  });
}




class Person {
  constructor(id, name, address) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  equals(other) {
    if (!(other instanceof Person))
      return false;

    return this.id === other.id;
  }
}

class Address {
  constructor(first_line, second_line, zipcode, location, country) {
    this.first_line = first_line;
    this.second_line = second_line;
    this.zipcode = zipcode;
    this.location = location;
    this.country = country;
  }

  equals(other) {
    if (!(other instanceof Address))
      return false;

    return this.first_line === other.first_line &&
      this.second_line === other.second_line &&
      this.zipcode === other.zipcode &&
      this.location === other.location &&
      this.country.equals(other.country);
  }
}

class Country {
  constructor(name, iso3601Code, language) {
    // ...
  }

  equals(other) {
    // ...
  }
}

const a = {};
const b = {};

function areEqual(a, b) {
  // ...
}

areEqual()
