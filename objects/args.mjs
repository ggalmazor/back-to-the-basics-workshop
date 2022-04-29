// const [a, b, c, ...rest] = [0,1,2,3,4,5,6,7,8,9];

// console.log(a,b,c,rest)

console.log([0,1,2].concat([3,4,5]))
console.log([...[0,1,2], ...[3,4,5]])

let a = [0,1,2];
const b = [3,4,5];
a.push(...b)
a = a.concat(b)
a.push(6, 7, 8)
const c = [...a];
console.log(a);
