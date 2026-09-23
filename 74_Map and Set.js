const map = new Map();
map.set("name", "Alice");
map.set("age", 30);
console.log(map.get("name")); // Alice
console.log(map.size);        // 2
map.forEach((value, key) => console.log(key, value));
const set = new Set([1,2,3,4]);
console.log(set.size);        // 4 (duplicate removed)
set.add(5);
console.log(set.has(3));      // true



