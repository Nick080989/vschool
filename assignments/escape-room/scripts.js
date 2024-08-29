const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log(`Hello, ${name}!`);

console.log("Welcome to the Escape Room. Your options are:");
console.log("1. Search the room for a key");
console.log("2. Put your hand in the hole in the wall");
console.log("3. Open the door and escape");

let hasKey = false;
let isAlive = true;

while (isAlive) {
    const action = readline.question("What do you want to do first? (1/2/3) ");

    if (action === "1") {
        console.log("You search the room and find a key!");
        hasKey = true;
    } else if (action === "2") {
        console.log("You put your hand in the hole and you died.");
        isAlive = false;
    } else if (action === "3") {
        if (hasKey) {
            console.log("You use the key to open the door. You escaped!");
            break;
        } else {
            console.log("The door is locked. You need to find the key first.");
        }
    } else {
        console.log("Invalid option. Please choose 1, 2, or 3.");
    }
}

if (!isAlive) {
    console.log("Game Over");
}