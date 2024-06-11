// Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
    
    // Polymorphic method
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Child class 1
  class Dog extends Animal {
    makeSound() {
      console.log(`${this.name} barks.`);
    }
  }
  
  // Child class 2
  class Cat extends Animal {
    makeSound() {
      console.log(`${this.name} meows.`);
    }
  }
  
  // Creating instances and calling polymorphic methods
  const dog = new Dog('Buddy');
  const cat = new Cat('Whiskers');
  
  dog.makeSound(); // Output: Buddy barks.
  cat.makeSound(); // Output: Whiskers meows.
  