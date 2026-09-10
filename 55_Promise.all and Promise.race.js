const p1 = new Promise(res => setTimeout(() => res("One"), 1000));
const p2 = new Promise(res => setTimeout(() => res("Two"), 500));
const p3 = new Promise((_, rej) => setTimeout(() => rej("Error"), 200));
Promise.all([p1,p2])
      .then(results => console.log("All results:", results));
Promise.race([p1,p2])
      .then(result => console.log("Race winner:", results));
Promise.allSettled([p1,p2,p3])
      .then(results => console.log(results.map(r => r.status)));

