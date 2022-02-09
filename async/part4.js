async function nonBlockingFn(delaySeconds) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(delaySeconds), delaySeconds * 1000)
  );
}

nonBlockingFn(1).then((value) => console.log(value));
