async function nonBlockingFn(delaySeconds) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(delaySeconds), delaySeconds * 1000)
  );
}

// Promise.any is settled as soon as any of the promises you feed it
// is fulfilled or they are all rejected, in which case it's rejected
// with an AggregateError.
Promise.any([
  nonBlockingFn(1),
  nonBlockingFn(2),
  nonBlockingFn(3)
]).then((args) => console.log(args));
