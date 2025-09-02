let score = "33abc"

console.log(typeof score);

console.log(typeof(score));

let valueNumber = Number(score)
console.log(typeof valueNumber);
console.log(valueNumber);
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1 => true; 0 => false
// "" => false;
// "hitesh" => true;

let someNumber = 22;
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ********* Operations *********
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);


// let str1 = "Hello"
// let str2 = " Avinash"
// console.log(str1+str2);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// prefix and postfix 
let x = 100
let y = x++;
let a = 200
let b = ++a;
console.log(`x: ${x} & y: ${y}`);
console.log(`a: ${a} & b: ${b}`);


