const users = [
      {id: 1, name: "Danish", age: 22},
      {id: 2, name: "Hamza", age: 21},
];

const user = users.find(u => u.age > 20);
console.log(user);      // {id: 1, name: "Danish", age:22}, {id: 2, name: "Hamza", age: 21}
const index = users.findIndex(u => u.id === 3);
console.log(index);
console.log(users.some(u => u.age < 20));
console.log(users.every(u => u.age > 20));

