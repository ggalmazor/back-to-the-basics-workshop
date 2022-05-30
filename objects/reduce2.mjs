function filter(array, predicate) {
  return array.reduce((accum, i) => {
    if (predicate(i))
      return accum.concat([i]);
    else
      return accum;
  }, [])
}

function map(array, mapper) {
  return array.reduce((accum, i) => {
    let valor = mapper(i);
    return accum.concat([valor])
  }, [])
}

const pares = filter(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  n => n % 2 === 0
);

console.log(pares);

const cuadrados = map(
  [0,1,2,3,4,5,6,7,8,9],
  n => n * n
)
console.log(cuadrados);
