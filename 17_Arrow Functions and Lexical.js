const person = {
      name: "Danish",
      hobbies: ["Reading", "Day Dreaming", "Coding"],
      shoeHobbies: functions() {
            // Arrow function capture 'this' frm showHobbies (person)
            this.hobbies.forEach(hobby => {
                  console.log(`${this.name} likes ${hobby}`);
            });
      }
};

person.showHobbies();
