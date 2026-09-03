function memorize(fn) {
      const cache = {};
      return function(...args) {
            const key = JSON.stringify(args);
            if (key in cache) {
                  console.log("fetching from cache");
                  return cache[key];
            }

            console.log("Computer result");
            const result = fn(...args);
            cache[key] = result;
            return result;
      }; 
}

const slowSquare = n => {
      // Simulate heavy computation
      for (let i = 0; i<1e7;i++) {}
      return n*n;
};

const memorization = memorize(slowSquare);
console.log(memorizedSquare(4));    // Computing result -> 16
console.log(memorizedSquare(4));    // Fetching from cache -> 16
