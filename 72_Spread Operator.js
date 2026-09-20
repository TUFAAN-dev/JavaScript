const arr1 = [1,2,3];
const arr2 = [4,5,6];
const merged = [...arr1, ...arr2];
console.log(merged);    // [1,2,3,4,5,6]
const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const combined = {...obj1, ...obj2};
console.log(combined);  // {a:1, b:2, c:3, d:4}

