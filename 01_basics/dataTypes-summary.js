// Primitive 

// 7 types: string, number, boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

//const bigNumber = 3425436457473986n

// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "batman", "ironman"];

let myObj = {
    Name: "nishant",
    age: 22,
}
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
