const fruits = ["Banana", "Apple", "Orange", "Mango", "Grapes"];
fruits.sort();
console.log(fruits);    // ["Apple", "Banana", "Grapes", "Mango", "Orange"]

const numbers = [10,5,8,1,7];
numbers.sort((a,b) => a-b);   // Ascending
console.log(numbers);   // [1,5,7,8,10]
numbers.sort((a,b) => b-a);   // descending
console.log(numbers);   // [10,8,7,5,1]

