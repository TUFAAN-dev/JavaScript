const user = {
      name: "Danish",
      age: 22,
      address: {
            city: "New York",
            zip: "10001"
      }
};

const {name, age, address: {city}} = user;
console.log(name,age,city);

const {country = "USA"} = user;
console.log(country);
