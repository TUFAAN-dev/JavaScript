// Curried function: take one argument at a time
function curryAdd(a) {
      return function(b) {
            return function(c) {
                  return a+b+c;
            };
      };
}

const result = curryAdd(1)(2)(3);
console.log(result);
// Arrow function shorthand
const curryMultiply = a => b => a*b;
const multiplyBy5 = curryMultiply(5);
console.log(multiplyBy5(10)); // 50

