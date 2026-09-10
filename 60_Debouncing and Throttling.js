// Debounce: delay execution until after wait time
function debounce(fn, delay) {
      let timeoutId;
      return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), delay);
      };
}

// Throttling: execute at most once per wait time 
function throttle(fn, limit) {
      let inThrottle = false;
      return function(...args) {
            if (!inThrottle) {
                  fn.apply(this,args);
                  inThrottle = true;
                  setTimeout(() = inThrottle = false, limit);
            }
      };
}

// Example usage (simulate scroll)
const debouncedLog = debounce(() => console.log("Debounced"), 500);
const throttledLog = throttle(() => console.log("Throttled"), 500);
// Call repeatedly t see effect

