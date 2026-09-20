async function fetchData() {
      throw new Error("Network error");      
}

async function main() {
      try {
            await fetchData();
      } catch (error) {
            console.error("Async error caught: ", error.message);
      }     
}

main();

