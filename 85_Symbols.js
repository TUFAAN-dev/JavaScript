const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2);   // false (unique)
const user = {
      name: "Alice",
      [sym1]: 123
};

console.log(user[sym1]);

// Symbols are not enumerable in for...in or Object.keys
console.log(Object.keys(user)); // ["name"]


