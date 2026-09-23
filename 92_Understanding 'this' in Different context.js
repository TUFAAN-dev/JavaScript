// Global
console.log(this);      // Window (browser) or global (Node)
// Function
function showThis() {
      console.log(this);
}

showThis();       // Window (or undefined in strict mode)
// Method
const obj = {method: showThis};
obj.method();     // obj
// Arrow function (lexical)
const arrow = () => console.log(this);
arrow();          // same as outer this