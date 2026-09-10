async function fetchData() {
      throw new Error("Something went wrong");
}
async function main() {
      try {
            await fetchData();
      }     catch (error) {
            console.error("Caught error:", error.message);
      }     finally {
            console.log("Cleanup");
      }
}
main();

