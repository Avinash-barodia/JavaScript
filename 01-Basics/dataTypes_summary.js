// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log((id === anotherId));

const bigNumber = 234325252454251n

// Reference (Non Primitive)
// Array, Objects, Functions 

const heros = ['shaktiman', 'hatim', 'naagraj']
let myObj = {
    name: "Avinash",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof bigNumber); // BigInt
console.log(typeof scoreValue); // number
console.log(typeof score); // number
console.log(typeof outsideTemp); // null => object
console.log(typeof isLoggedIn); // boolean
console.log(typeof anotherId); // symbol
console.log(typeof heros)     //object
console.log(typeof myObj)      // object
console.log(typeof myFunction)  // function

