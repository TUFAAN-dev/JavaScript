const str = "Hello";
for (const ch of str) {
      console.log(ch);
}

console.log(str.charAt(1));   // e
console.log(str[1]);          // e
// Difference with Unicode
const emoji = ">3";
console.log(emoji.length);
console.log(emoji[0]); 
console.log(Array.from(emoji)[0]);