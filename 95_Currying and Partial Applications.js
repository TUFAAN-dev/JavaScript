// Currying
const curry = fn => a => b => fn(a,b);
const add = (a,b) => a+b;
const curriedAdd = curry(add);
console.log(curriedAdd(5)(3));      // 8
// Partial Applications
function multiply(a,b,c) {
      return a*b*c;
}
function partial(fn, ...args) {
      return (...moreArgs) => fn(...args, ...moreArgs);
}
const multiplyBy2 = partial(multiply, 2);
console.log(multiplyBy2(3,4));      // 24
