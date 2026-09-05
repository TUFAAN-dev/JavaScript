function Person(name, age) {
      this.name = name;
      this.age = age;
      this.greet = function() {
            console.log(`Hi, I'm ${this.name}`);
      };
}

const Danish = new Person("Danish", 22);
Danish.greet();
