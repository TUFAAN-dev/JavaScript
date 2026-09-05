const nested = [1,[2, [3,4]], 5];

console.log(nested.flat());         // [1,2,[3,4],5]
console.log(nested.flat(2));        // [1,2,3,4,5]
const arr = [1,2,3];
const mapped = arr.flatMap(x => [x,x*2]);
console.log(mapped);                // [1,2,2,4,3,6]

