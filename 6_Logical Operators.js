let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn && isAdmin);       // False
console.log(isLoggedIn || isAdmin);       // true
console.log(!isLoggedIn);                 // false

// Short-circuit: returns the value that determines results
console.log(0 || "default");              // "default"
console.log(1 && "Hello");                // "Hello"