// main.js
const worker = new Worker('worker.js');
worker.postMessage({data: 'some data'});
worker.onmessage = (event) => {
      console.log('Received from worker:' , event.data);
};

worker.onerror = (error) => {
      console.log('Worker error:'), error;
};

// Worker.js
self.onmessage = (event) => {
      const result = processData(event.data);
      self.postMessage(result);
};

function processData(data) {
      // Heavy Computation
      let sum = 0;
      for (let i = 0; i < 1e8; i++) sum += i;
      return {processed: true, sum};
}

