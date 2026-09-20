// Express-like error middleware pattern
function errorHandler(err, req, res, next) {
      console.error(err.stack);
      res.status(500).json({error: err.message});
}

// Simulate request
const req = {};
const res = {
      status: function(code) {this.statusCode = code; return this;},
      json: function(data) {console.log("Response:", data);}
};

const next = () => {};
try {
      throw new Error("Database connection failed");
}     catch (err) {
      errorHandler(err, req, res, next);
}