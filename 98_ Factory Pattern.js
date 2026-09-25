class Car {
      constructor (mode, year) {
            this.model = model;
            this.year = year;
      }
      drive() {
            console.log(`${this.model} is driving`);
      }
}

class CarFactory {
      createCar(type) {
            switch(type) {
                  case "sedan":
                        return new Car("Sedan:", 2023);
                  case "suv":
                        return new Car("Suv", 2023);
                  default:
                        throw new Error("Unknown car model");
            }
      }
}

const factory = new CarFactory = new CarFactory();
const sedan = factory.createCar("Sedan");
sedan.drive();



