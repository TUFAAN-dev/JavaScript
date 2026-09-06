const phone = "123-456-789";
const phoneRegex = /\d{3}-\d{3}-\d{4}/;
console.log(phoneRegex.test(phone));      // true
// Global and Case-insensitive flags
const str = "Hello hello HELLO";
console.log(str.match(/hello/gi));        // ["Hello", "hello", "HELLO"]
// Character class
console.log("abc123").match(/[a-z]+/);    // ["abc"]

