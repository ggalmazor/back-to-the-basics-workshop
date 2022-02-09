async function nonBlockingFn(delaySeconds) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(delaySeconds), delaySeconds * 1000)
  );
}

Promise.all([
  nonBlockingFn(1),
  nonBlockingFn(2),
  nonBlockingFn(3)
]).then((args) => console.log(args));
