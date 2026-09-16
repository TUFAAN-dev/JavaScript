function complexCalculation(x) {
      let result = x * 2;
      debugger;   // Execution pauses here in DevTools
      result += 10;
      return result;
}

console.log(complexCalculation(5));

