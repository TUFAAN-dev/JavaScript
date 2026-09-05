const numbers = [10,20,30];

// for...of
for (const num of numbers) {
      console.log(num);
}

// forEach
numbers.forEach((num, index) => {
      console.log(`Index ${index}: ${num}`);
});

