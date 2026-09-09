const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
            const success = true;
            if (success) resolve("Operation succeeded");
            else reject("Operation failed");
      }, 1000);
});
promise
      .then(result => console.log(result))
      .catch(error => console.error(error));

      