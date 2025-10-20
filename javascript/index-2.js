//Create factory function to generate pet objects with properties (name, species, happiness, energy)
// and methods (play, feed, status, rest)
function createPet(name, species, happiness, energy) {
  return {
    name: name,
    species: species,
    happiness: happiness,
    energy: energy,

    play: function () {
      this.energy -= 20;
      this.happiness += 10;
      return `You played with ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`;
    },

    feed: function () {
      this.energy += 20;
      this.happiness += 20;
      return `You fed ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`;
    },

    status: function () {
     return `Pet Name: ${this.name}, Species: ${this.species}, Happiness ${this.happiness}, Energy: ${this.energy}`;
    },

    rest: function () {
        this.energy += 30;
        return `${this.name} is resting. Energy raised to ${this.energy}!`;
    }
  };
}

//Create multiple pet objects using the factory function
const pet1 = createPet("Bella", "Cat", 50, 100);
const pet2 = createPet("Zoie", "Cat", 50, 100);
const pet3 = createPet("Ofcourse", "Horse", 50, 100);
const pet4 = createPet("Stick", "Fish", 50, 100);

//Call methods on each pet to demonstrate functionality
console.log(pet1.status());
console.log(pet1.play());
console.log(pet1.rest());
console.log(pet1.status());

console.log(pet2.status());
console.log(pet2.play());
console.log(pet2.rest());
console.log(pet2.status());

console.log(pet3.status());
console.log(pet3.play());
console.log(pet3.rest());
console.log(pet3.status());

console.log(pet4.status());
console.log(pet4.play());
console.log(pet4.rest());
console.log(pet4.status());