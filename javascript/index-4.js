//Create function to create pets of different species with play, feed, status, and rest behaviors
function createPet(name, species, energy, happiness) {
  return {
    name: name,
    species: species,
    energy: energy,
    happiness: happiness,

    play: function () {
      this.energy -= 20;
      this.happiness += 10;
      return `You played with ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`;
    },

    feed: function () {
      this.energy += 20;
      this.happiness += 20;
      return `Feeding ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`;
    },

    status: function () {
      return `Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`;
    },
    rest: function () {
      this.energy += 30;
      return `${this.name} is resting. Energy raised to ${this.energy}!`;
    },
  };
}

// Create arrays to hold different species of pets

const catKennel = [
  createPet("Cheeseburger", "Cat", 30, 100),
  createPet("Pickle", "Cat", 60, 90),
  createPet("Mustard", "Cat", 40, 80),
  createPet("Lettuce", "Cat", 20, 70),
  createPet("Paradise", "Cat", 80, 10),
];

const dogKennel = [
  createPet("Nacho", "Dog", 90, 50),
  createPet("Cheezewhiz", "Dog", 30, 80),
  createPet("Chipp", "Dog", 90, 90),
  createPet("Olive", "Dog", 10, 100),
  createPet("Spaghetti", "Dog", 30, 100),
];
const fishTank = [
  createPet("Jeffington", "Fish", 70, 70),
  createPet("Alphonso", "Fish", 100, 30),
  createPet("Steve", "Fish", 15, 45),
  createPet("Jennifish", "Fish", 93, 42),
  createPet("Alex", "Fish", 77, 77),
];

//For loops to feed and show status of all pets in each array
for (const pet of catKennel) {
  console.log(pet.feed());
  console.log(pet.status());
}

for (const pet of dogKennel) {
  console.log(pet.feed());
  console.log(pet.status());
}

for (const pet of fishTank) {
  console.log(pet.feed());
  console.log(pet.status());
}

