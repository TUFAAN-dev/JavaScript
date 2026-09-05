let a = 5, b = 10;
[a, b] = [b, a];
console.log(a,b);
const colors = ["red", "green", "blue", "yellow"];
const [primary, secondary, ...others] = colors;
console.log(primary);         // red
console.log(secondary);       // green
console.log(others);          // ["blue", "yellow"]

