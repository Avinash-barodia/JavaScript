const name = "Avinash"
const repoCount = 6

// old way to merge, not recommended

// console.log(name + repoCount + " Value");


// New Way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// one more way to initialise string but with more methods
const gameName = new String('aivnashab')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));
