let foo = { a: 44 };

console.log(`foo.a: ${foo.a}`);
console.log(`foo["a"]: ${foo["a"]}`);

/*

const a = 1;

function fooFn() {
  const c = 42;
  console.log(`a: ${a}, this.b: ${this.b}, c: ${c}`);
}

const bar = {
  b: 33,
  foo: fooFn
};

fooFn();
bar.foo();

/*

fooFn.call({ b: 22 });
bar.foo.call({ b: 44 });

/*

bar.foo.call(bar);

/*

console.dir({});
console.dir({}.__proto__, { showHidden: true, depth: 0 });
console.dir({}.__proto__.__proto__);

/*

console.log(`${bar.a}`);

bar.__proto__ = foo;

console.log(`${bar.a}`);

*/
