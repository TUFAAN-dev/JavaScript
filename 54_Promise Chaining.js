function asyncTask(value) {
      return new Promise(resolve => {
            setTimeout(() => resolve(value * 2), 500);
      });
}

asyncTasks(5)
      .then(result => asyncTask(result))
      .then(result => asyncTask(result))
      .then(finalResult => console.log(finalResult));


      