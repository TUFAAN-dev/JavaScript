function Animal(name) {
      this.name = name;
}

Animal.prototype.speak = function() {
      console.log(`${this.name} makes a sound`);
};

const dog = new Animal("Rex");
dog.speak();

console.log(Object.getPrototypeOf(dog) === Animal.prototype);

