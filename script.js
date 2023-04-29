class Animal {
  constructor(species) {
    this.species = species;
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }

  purr() {
    console.log(`purr`);
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }

  bark() {
    console.log(`woof`);
  }
}


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
