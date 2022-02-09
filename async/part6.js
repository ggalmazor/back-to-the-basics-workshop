async function nonBlockingFn(delaySeconds) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(delaySeconds), delaySeconds * 1000)
  );
}

// Promise.race is settled as soon as any of the promises you feed it
// settle, whether they are fulfilled or rejected.
Promise.race([
  nonBlockingFn(1),
  nonBlockingFn(2),
  nonBlockingFn(3)
]).then((args) => console.log(args));
