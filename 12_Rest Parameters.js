function sum(...numbers) {
      return numbers.reduce((total, num) => total + num , 0);
}

console.log(sum(1,2,3));
console.log(sum(10,12,23));

