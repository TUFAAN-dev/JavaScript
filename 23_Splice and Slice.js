const arr = [1,2,3,4,5];

// Slice: returns a shallow copy, doesn't mutate
const sub = arr.slice(1,3);
console.log(sub);       // [2,3]
console.log(arr);       // Meanwhile array remains the same

// Splice: mutate original
const removed = arr.splice(2,2,'a','b');
console.log(removed);   //[3,4]
console.log(arr);       // [1,2,'a','b',5]
