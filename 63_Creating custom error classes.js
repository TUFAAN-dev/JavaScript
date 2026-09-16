class ValidationError extends Error {
      constructor(message) {
            super(message);
            this.name = "ValidationError";
      }
}

function validateUser(user) {
      if (!user.name) {
            throw new ValidationError("Name is required");
      }
}

try {
      validateUser({});
} catch (e) {
      console.log(e instanceof ValidationError);      // true
      console.log(e.name);          // ValidationError
      console.log(e.message);       // Name is required
}