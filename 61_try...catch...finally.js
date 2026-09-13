try {
      const result = undefinedVariable;
      console.log(result)
}     catch (error) {
      console.log("Error caught: ", error.message);
}     finally {
      console.log("This always runs");
}

