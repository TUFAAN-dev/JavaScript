let resource = null;
try {
      resource = acquireResource();

      // Use resource
      throw new Error("Error during processing");
}     catch (e) {
      console.error(e.message);
}     finally {
      if (resource) {
            console.log("Releasing resource");
            resource = null;
      }
}

function acquireResource() {
      console.log("Resource acquired");
      return {name: "DB connection"};
}