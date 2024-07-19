class Animal {
  color;
  family;
  sound;

  constructor(color, family, sound) {
    this.color = color;
    this.family = family;
    this.sound = sound;
  }

  showAnimal() {
    console.log(
      `This is a ${this.color} ${this.family} with the sound ${this.sound}`
    );
  }
}

let animal = new Animal(4, "brown", "rodent", "muze");
console.log(animal);

animal.showAnimal();
