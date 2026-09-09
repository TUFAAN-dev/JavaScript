console.log("Start");
setTimeout (() => {
      console.log("This runs after 2 seconds");
}, 2000);
let count = 0;
const intervalId = setInterval(() => {
      count++;
      console.log(`Interval tick ${count}`);
      if (count === 3) clearInterval(intervalId);
}, 1000);
console.log("End");

