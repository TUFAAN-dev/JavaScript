// In an ES module, you can use await at the top level
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

const data = await response.json();
console.log(data);
// This only words in module scripts or Node with type: module



