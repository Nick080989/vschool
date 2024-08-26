var firstName = "Jim";

var age = 42;

// When there's a birthday:
age++;
console.log(age);  // 43

var zipCode = "90210"
// OR
var zipCode = 90210

var zipCode = "90210-1234"

// if zipCode were a number, JavaScript thinks you want
// to subtract, so zipCode is now 88976...
var zipCode = 90210-1234;  // oops...

var saleIsRunning = true;
var personIsAlive = false;
var isAdmin = true;
// etc.
// An empty array:
var things = [];

// A useful array of strings. Collects together strings representing colors of the rainbow
var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

// A collection of business expenses, which can now be easily totaled to a sum.
var expenditures = [109.99, 28.79, 29.95, 224.95];

// A bad example for the use of an array. Should use an object instead:
var person = ["Sam", "Johnson", 30, "brown", "blue"];
// ("brown" hair and "blue" eyes, but that isn't obvious from using an array)

var myArray = ["a", "b", "c", "d", "e", "f"]
// index:       0    1    2    3    4    5

var myArray = ["a", "b", "c", "d", "e", "f"];
console.log(myArray[0]) . // logs "a"
console.log(myArray[3]) . // logs "d"
console.log(myArray[5]) . // logs "f"

var myArray = [
     ["a", "b", "c"],
     [true, true, false],
     [42, 43, 44]
 ]
 
 console.log(myArray[0][2])  // logs "c"
 console.log(myArray[2][2])  // logs 44

 var person = {
     firstName: "Sarah",
     lastName: "Smith",
     age: 26,
     hairColor: "Red",
     eyeColor: "Green"
 }

 console.log(person.firstName);  // logs "Sarah"
console.log(person.age);  // logs 26
console.log(person.favoriteColor);  // logs undefined - our object doesn't have that property

console.log(person["firstName"]);  // logs "Sarah"
console.log(person["age"]);  // logs 26
console.log(person["favoriteColor"]);  // logs undefined - our object doesn't have that property

var myBool = false;
var isThisASimpleConcept = true;

if (currentTime <= wakeUpTime) {
     beLeisurely();
     eatBreakfast();
 } else {
     rushOutTheDoor();
 }
 
 if (condition) {
     // thing to do;
 }
 
 var age = parseInt(prompt("What is your age?"));

if (age <= 17) {
    // Allow the user in
} else {
    // Don't allow the user in
}

var myArray = [];

if(myArray.length) {
    // won't run because myArray.length is 0, and that is a falsey value.
}

if (myArray) {
    // WILL run, because an empty array isn't one of the falsey values.
}

(1 > 3) && (false);  // false
(5 < 3) && (true);  // false
(1 < 3) && (false);  // false
(1 < 3) && (true);  // true

person.speak && person.speak();

(1 > 3) || (false);  // false
(5 < 3) || (true);  // true
(1 < 3) || (false);  // true
(1 < 3) || (true);  // true

console.log(!true);  // false
console.log(!false);  // true
console.log(!true || false);  // false
console.log(!(1 > 3) || !true);  // ==> !false || !true ==> true || false ==> true

switch (mood_ring) {
	case ‘blue’:
		mood = ‘calm’;
		break;
	case ‘red’:
		mood = ‘excited’;
		break;
	default:
		mood = ‘dead’;
}
