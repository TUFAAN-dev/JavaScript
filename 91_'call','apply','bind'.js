const person = {name: "Alice"};
function greet(greeting) {
      console.log(`${greeting}, ${this.name}`);
}

greet.call(person, "Hello");  // Hello, Alice
greet.apply(person, ["Hi"]);  // Hi, Alice
const boundGreet = greet.bind(person);
boundGreet("hey");
