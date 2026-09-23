const original = {a:1, b:{c:2}};
// Shallow copy
const shallow = {...original};
shallow.b.c = 3;
console.log(original.b.c); // 3 (affected)
const deep = JSON.parse(JSON.stringify(original));
deep.b.c = 4;
console.log(original.b.c); // 3 (unchanged)
// Better deep clone: structuredClone (modern browsers/Node 17+)
const deepClone = structuredClone(original);



