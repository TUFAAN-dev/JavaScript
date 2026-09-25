const validator = {
      set(obj, prop, value) {
            if (prop === "age") {
                  if (!Number.isInteger(value) || value < 0) {
                        throw new TypeError("age must be a non-negative integer");
                  }
            }
            obj[prop] = value;
            return true;
      }
};

const person = new Proxy({}, validator);
person.name = "Alice";
person.age = 30;
console.log(person);
try {
      person.age = -5;
} catch (e) {
      console.error(e.message);
}



