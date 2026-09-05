const arr1 = [1,2,3];
const arr2 = [4,5,6];
const combined = [...arr1, ...arr2];
console.log(combined);        // [1,2,3,4,5,6]

// Rest in descending
const [first, ...rest] = combined;
console.log(first);           // 1
console.log(rest);            // [2,3,4,5,6]

