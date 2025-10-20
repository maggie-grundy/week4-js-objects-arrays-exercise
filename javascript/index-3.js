//Create pets using factory function (include optional rest method to increase happiness)
function createPet (name, species, energy, happiness) {
    return {
        name: name,
        species: species,
        energy: energy,
        happiness: happiness,

    play: function() {
        this.energy -= 20;
        this.happiness += 10;
        return `You played with ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`;
    },

    feed: function() {
        this.energy += 20;
        this.happiness += 20;
        return `You fed ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`;
    },

    status: function() {
        return `Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`;
},
    rest: function() {
        this.energy += 30;
        return `${this.name} is resting. Energy raised to ${this.energy}!`;
    }
}}

const pet1 = createPet("Ofcourse", "Horse", 30, 100);
const pet2 = createPet("Stick", "Fish", 60, 90);
const pet3 = createPet("Kuma", "Bear", 90, 50);
const pet4 = createPet("Panda", "Panda", 30, 100);
const pet5 = createPet("Mokujin", "Tree?", 70, 70);
const pet6 = createPet("Yoshimitsu", "Unsure", 100, 30);

//Store pets in array
const pets = [];
pets.push(pet1, pet2, pet3, pet4, pet5);
pets[5] = pet6;

//Log the array
console.log(pets);