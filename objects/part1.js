const a = 1;

function fooFn() {

  const c = 42;
  console.log(`a: ${a}, this.b: ${this.b}, c: ${c}`);
}
let foo = { a: 44 };

const bar = {
  b: 33,
  foo: fooFn
};



bar.foo();

function call_as_method_of(object, method_name) {
  (object[method_name]).call(object);
}

call_as_method_of(bar, 'foo');







console.log(`${bar.a}`);

bar.__proto__ = foo;

console.log(`${bar.a}`);

bar.a = 55;

console.log(`${bar.a}`);
