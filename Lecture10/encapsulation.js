class Person {
    // Constructor to initialize name and age
    constructor(name, age) {
      let _name = name;
      let _age = age;
  
      // Public method to get the name
      this.getName = function() {
        return _name;
      };
  
      // Public method to set the name
      this.setName = function(name) {
        _name = name;
      };
  
      // Public method to get the age
      this.getAge = function() {
        return _age;
      };
  
      // Public method to set the age
      this.setAge = function(age) {
        if (age > 0) {
          _age = age;
        } else {
          console.log("Please enter a valid age.");
        }
      };
    }
  }
  
  // Create a new Person object
  const person = new Person("John", 30);
  
  // Accessing the private variables through public methods
  console.log(person.getName()); // Output: John
  console.log(person.getAge()); // Output: 30
  
  // Modifying the private variables through public methods
  person.setName("Jane");
  person.setAge(25);
  
  console.log(person.getName()); // Output: Jane
  console.log(person.getAge()); // Output: 25
  
  // Trying to set an invalid age
  person.setAge(-5); // Output: Please enter a valid age.
  