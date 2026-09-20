// math.js
export const PI = 3.14159;
export function add(a,b) {return a+b;}
export default function subtract(a,b) {return a-b;}


// main.js
import subtract, {PI, add} from './math.js'
console.log(PI);  // 3.14159
console.log(add(2,3)); // 5
console.log(subtract(5,2));   // 3


