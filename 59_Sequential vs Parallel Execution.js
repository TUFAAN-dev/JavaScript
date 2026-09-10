function delay(ms, value) {
      return new Promise(res => setTimeout(() => res(value), ms));
}
async function sequential() {
      const start = Date.now();
      const a = await delay(1000, "A");
      const b = await delay(1000, "B");
      console.log(a,b `Time: ${Date.now() - start}ms`);
}
async function parallel() {
      const start = Date.now();
      const [a,b] = await Promise.all([delay(1000, "A"), delay(1000, "B")]);
      console.log(a,b, `Time: ${Date.now() - start}ms`);
}
sequential();
parallel();

