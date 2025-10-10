// // // How to create an object
// // 	const personObject = {
// // 		firstName: "FirstName",
// // 		lastName: "LastName",
// // 		greet: function() {
// // 			return "Hello Everyone"
// // 		},
// //         greetWithName: function () {
// //             return `Hello Everyone, my name is ${this.firstName}`;
// //         },
// //         greetWithMessage: function (message) {
// //             return "Hello, this is your message " + message;
// //         },
// //         greetWithFunctionName: function greet() {
// //             return "Testing";
// //         }
// // 	};

// // // console.log(personObject.greet());
// // // console.log(personObject.greetWithName());
// // console.log(personObject.greetWithMessage("something"));
// // // console.log(personObject.greetWithFunctionName);


// // // Creating new functions
// // // Functions can have a name - or not
// // // Function with a name:
// // function callMeLater() {
// //     console.log("aaaaa")
// // }

// // callMeLater();

// // // Creating anonymous function
// // const anonymousFunction = function() {
// //     console.log("This is an anonymous function");
// // }

// // JavaScript Constructors
// function Animal(type, color) {
//     this.type = type;
//     this.color = color;
// }

// const dog = new Animal("dog", "brown");
// const dog2 = new Animal("dog", "brown");

// const dog3 = {
//     name: "test"
// };

// const dog4 = dog3;

// console.log(dog);

// function testFunction(firstName, lastName) {
// let person = {
//     firstName: firstName,
//     lastName: lastName;
// }
//     return person;
// }

// const person = testFunction('Maggie', 'Grundy')
// console.log(dog instanceof Animal);

// console.log(dog3.name);