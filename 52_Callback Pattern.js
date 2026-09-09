function fetchData(callback) {
      setTimeout(() => {
            const data = {user: "Danish"};
            callback(null, data);
      }, 1000);
}
fetchData((err, data) => {
      if (err) console.error(err);
      else console.log("Received:", data);
});

