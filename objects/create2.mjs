class ValidationError extends Error {

}

class Person {
  constructor(name, dni) {
    Person.validateDni(dni);

    this.name = name;
    this.dni = dni;
  }

  static from(nombre, apellidos, dni) {
    return new Person(nombre + ' ' + apellidos, dni);
  }

  static validateDni(dni) {
    if (tururu)
      throw new ValidationError(`Invalid DNI: ${dni}`);
  }

  greet(otherName) {
    console.log(`Hi, ${otherName}, I'm ${this.name}`);
  }
}

const nombre = 'Guillermo';
const apellidos = 'Gutierrez Almazor';

const guille = Person.from(nombre, apellidos);
