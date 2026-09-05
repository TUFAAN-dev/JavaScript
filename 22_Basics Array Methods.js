const arr = [1,2,3];

arr.push(4);            // Added to the end
console.log(arr);       // [1,2,3,4]
arr.pop()               // No index, means last value by default
console.log(arr);       // [1,2,3]
arr.unshift(0);         // Add "0" to the front
console.log(arr);       // [0,1,2,3]
arr.shift();            // No index, means remove from front
console.log(arr);       // [1,2,3]

