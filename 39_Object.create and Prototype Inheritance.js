const Animal = {
      speak() {
            console.log(`${this.name} makes a sound`);
      }
};

const dog = Object.create(Animal);
dog.name = "Rex";
dog.speak();

console.log(Animal.isPrototypeOf(dog));
