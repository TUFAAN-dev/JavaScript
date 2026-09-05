const person = {
      firstName: "Danish",
      lastName: "Ali",
      fullName: functions() {
            return this.firstName + " " + this.lastName;
      }
};

console.log(person.fullName());



