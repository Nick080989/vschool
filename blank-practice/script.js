const readlineSync = require('readline-sync');

// Game state
let playerName = '';
let playerHP = 100;
let inventory = [];
let enemiesKilled = 0;

// Enemy types with their HP and damage ranges
const enemies = [
    { name: 'The Dragon', hp: 30, minDamage: 5, maxDamage: 10 },
    { name: 'The Wizard', hp: 50, minDamage: 8, maxDamage: 15 },
    { name: 'The Troll', hp: 70, minDamage: 10, maxDamage: 20 }
];

// Get player's name
playerName = readlineSync.question('May I have your name? ');
console.log(`Hi ${playerName} and welcome to the adventure RPG!`);

// Main game loop
function gameLoop() {
    while (true) {
        const action = readlineSync.question("Enter [w] to walk, [p] to print stats, [i] for inventory, or [q] to quit: ");
        
        if (action === 'w') {
            walk();
        } else if (action === 'p') {
            printStats();
        } else if (action === 'i') {
            printInventory();
        } else if (action === 'q') {
            console.log("Thanks for playing! Goodbye.");
            break;
        } else {
            console.log("Invalid input. Please try again.");
        }
    }
}

function walk() {
    console.log("You start walking...");
    if (Math.random() < 0.33) { // 1/3 chance of encountering an enemy
        const enemy = enemies[Math.floor(Math.random() * enemies.length)];
        console.log(`A wild ${enemy.name} appears!`);
        handleEncounter(enemy);
    } else {
        console.log("You continue your journey without incident.");
    }
}

function handleEncounter(enemy) {
    let enemyHP = enemy.hp;
    console.log(`You encounter a ${enemy.name} with ${enemyHP} HP!`);

    while (true) {
        const action = readlineSync.question("Do you want to [a]ttack or [r]un? ");
        if (action === 'a') {
            const playerDamage = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
            enemyHP -= playerDamage;
            console.log(`You deal ${playerDamage} damage to the ${enemy.name}!`);

            if (enemyHP <= 0) {
                console.log(`You defeated the ${enemy.name}!`);
                enemiesKilled++;
                const hpGained = Math.floor(Math.random() * 20) + 10;
                playerHP += hpGained;
                console.log(`You gained ${hpGained} HP!`);
                const item = getRandomItem();
                inventory.push(item);
                console.log(`You found a ${item}!`);
                checkVictory();
                break;
            }

            const enemyDamage = Math.floor(Math.random() * (enemy.maxDamage - enemy.minDamage + 1)) + enemy.minDamage;
            playerHP -= enemyDamage;
            console.log(`The ${enemy.name} attacks you for ${enemyDamage} damage!`);

            if (playerHP <= 0) {
                console.log("You have been defeated. Game over!");
                process.exit();
            }
        } else if (action === 'r') {
            if (Math.random() < 0.5) {
                console.log("You successfully escaped!");
                break;
            } else {
                console.log("You failed to escape.");
                const enemyDamage = Math.floor(Math.random() * (enemy.maxDamage - enemy.minDamage + 1)) + enemy.minDamage;
                playerHP -= enemyDamage;
                console.log(`The ${enemy.name} attacks you for ${enemyDamage} damage!`);

                if (playerHP <= 0) {
                    console.log("You have been defeated. Game over!");
                    process.exit();
                }
            }
        } else {
            console.log("Invalid input. Please try again.");
        }
    }
}

function printStats() {
    console.log(`\nName: ${playerName}`);
    console.log(`HP: ${playerHP}`);
    console.log("Inventory:", inventory.length > 0 ? inventory.join(", ") : "Empty");
}

function getRandomItem() {
    const items = ['Health Potion', 'Sword', 'Shield', 'Armor'];
    return items[Math.floor(Math.random() * items.length)];
}

function checkVictory() {
    if (enemiesKilled >= 3) {
        console.log("Congratulations! You have defeated 3 enemies and won the game!");
        process.exit();
    }
}

// Start the game
gameLoop();
