// Password validation: at least 8 chars, one uppercase, one lowercase, one digit
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
console.log(passwordRegex.test("Abcdef1"));           // false (7 chars)
console.log(passwordRegex.test("Abcdef12"));          // true
// Backreference: find repeated word
const text = "The the dog";
const repeatedWordRegex = /\b(\w+)\s+\1\b/i;
console.log(text.match(repeatedWordRegex));           // ["The the", "The"]

