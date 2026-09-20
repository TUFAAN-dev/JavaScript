// Iterator protocol
const iterable = {
      [Symbol.iterator]() {
            let i = 0;
            return {
                  next() {
                        if (i < 3) return {value: i++, done: false};
                        return {value: undefined, done: true};
                  }
            };
      }
};

for (const value of iterable) {
      console.log(value);     // 0 1 2
}

// Generator function
function* countUpTo(max) {
      for (let i = 1; i <= max; i++) {
            yield i;
      }
}

const gen = countUpTo(3);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);

