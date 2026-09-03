function greetUser(name, callback) {
      console.log("Hello " + name + "!");
      callback();
}

function sayGoodbye() {
      console.log("GoodBye! Ms. " + name);
}

greetUser("Danish", sayGoodbye);