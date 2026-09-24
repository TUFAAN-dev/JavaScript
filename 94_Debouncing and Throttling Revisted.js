// Debounce: wait for pause
function debounce(func, wait) {
      let timeout;
      return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
      };
}

// Throttle: Limit rate
function throttle(func, limit) {
      let lastCall = 0;
      return function(...args) {
            const now = Date.now();
            if (now - lastCall >= limit) {
                  lastCall = now;
                  func.apply(this, args);
            }
      };
}

// Example: Simulate input
const processInput = debounce((val) => console.log("Debounced: ", val), 300);
const processScroll = throttle(() => HTMLFormControlsCollection.log("Throttled scroll"), 1000);
