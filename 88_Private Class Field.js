class Counter {
      #count = 0; // private field
      increment() {
            this.#count++;
      }
      get value() {
            return this.#count;
      }
}

const counter = new Counter();
counter.increment();
console.log(counter.value);   // 1
// console.log(counter.#count);     // SyntaxError
