function delay(ms) {
      return new Promise(res => setTimeout(res, ms));
}
async function run() {
      console.log("Start");
      await delay(1000);
      console.log("After 1 second");
      await delay(500);
      console.log("After another 0.5 second");
}
run();

