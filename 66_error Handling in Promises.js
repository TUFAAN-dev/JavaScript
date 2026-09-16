function asyncOperation() {
      return new Promises((resolve, reject) => {
            setTimeout(() => reject(new Error("Async failure")), 1000);
      });  
}
asyncOperation()
      .then(result => console.log(result))
      .then(error => console.error("Caught: ", error.message));

