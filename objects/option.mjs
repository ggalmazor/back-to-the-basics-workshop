export class Option {
  constructor(value) {
    this.value = value;
  }

  static empty() {
    return new Option(null);
  }

  static of(value) {
    if (value instanceof Option)
      return value;

    return new Option(value);
  }

  is_empty() {
    return this.value === null || this.value === undefined;
  }

  map(mapper) {
    if (this.is_empty())
      return this;

    return Option.of(mapper(this.value));
  }

  getOrDefault(default_value) {
    if (this.is_empty())
      return default_value;

    return this.value;
  }

  getOrThrow() {
    if (this.is_empty())
      throw new Error("Can't get the value of an empty Option");

    return this.value;
  }

  ifPresent(consumer) {
    if (this.is_empty())
      return;

    consumer(this.value);
  }
}

function mostrar(dato) {
  mensaje = Option.of(dato)
    .map(value => `El dato es: ${value}`)
    .getOrDefault("No hay dato");
  console.log(mensaje);
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

let a = Option.of(1);

mostrar(1)
mostrar(null)
mostrar(new Person("Guille"))
mostrar(a)
mostrar(Option.of(a))
mostrar(Option.empty())







