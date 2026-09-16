function divide(a,b) {
      if ( b === 0) {
            throw new Error("Division by Zero is not allowed");
      }
      return a/b;
}

try {
      console.log(divide(10,0));
} catch (e) {
      console.error(e.message);
}


