const readlineSync = require('readline-sync');

function playGame() {
    // Intro Question
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi ${userName} and welcome to the adventure RPG!`);

    let isPlaying = true;
    let inventory = [];
    let hp = 100;
    let enemiesKilled = 0;
    let defeatedEnemies = [];

    // Enemy List
    const enemies = [
        { name: "The Dragon", hp: 100, item: "Dragon Horn" },
        { name: "The Wizard", hp: 50, item: "Wizard's Staff" },
        { name: "The Troll", hp: 25, item: "Troll's Club" }
    ];

    // Enemy Encounter
    function encounter() {
        const availableEnemies = enemies.filter(enemy => !defeatedEnemies.includes(enemy.name));
        if (availableEnemies.length === 0) {
            console.log("You've defeated all the enemies! Congratulations, you win!");
            return false;
        }
        const enemy = availableEnemies[Math.floor(Math.random() * availableEnemies.length)];
        console.log(`You've encountered ${enemy.name}!`);
        return enemy;
    }

    // Combat
    function combat(enemy) {
        let enemyHP = enemy.hp;
        while (hp > 0 && enemyHP > 0) {
            readlineSync.question('Press Enter to continue...');
            const playerDamage = Math.floor(Math.random() * 10) + 1;
            enemyHP -= playerDamage;
            console.log(`You deal ${playerDamage} damage to ${enemy.name}. ${enemy.name} now has ${Math.max(enemyHP, 0)} HP.`);
            
            if (enemyHP <= 0) {
                console.log(`You have defeated ${enemy.name}!`);
                enemiesKilled++;
                defeatedEnemies.push(enemy.name);
                hp += 20;
                console.log(`You've been awarded 20 HP. Your HP is now ${hp}.`);
                inventory.push(enemy.item);
                console.log(`You've obtained the ${enemy.item}!`);
                return true;
            }
            
            readlineSync.question('Press Enter to continue...');
            const enemyDamage = Math.floor(Math.random() * 10) + 1;
            hp -= enemyDamage;
            console.log(`${enemy.name} deals ${enemyDamage} damage to you. You now have ${Math.max(hp, 0)} HP.`);
            
            if (hp <= 0) {
                console.log('You have been defeated!');
                return false;
            }
        }
    }

    // Walking
    function walk() {
        console.log('You begin to walk...');
        if (Math.random() < 0.33) {  
            const enemy = encounter();
            if (!enemy) return false;
            const action = readlineSync.question('Would you like to [a] attack the enemy or [r] run away? ');
            if (action === 'a') {
                return combat(enemy);
            } else if (action === 'r') {
                console.log(`You attempt to run away from ${enemy.name}!`);
                if (Math.random() < 0.5) {
                    console.log('You successfully escaped!');
                    return true;
                } else {
                    console.log('Your escape attempt failed! The enemy attacks you.');
                    const enemyDamage = Math.floor(Math.random() * 10) + 1;
                    hp -= enemyDamage;
                    console.log(`${enemy.name} deals ${enemyDamage} damage to you. You now have ${Math.max(hp, 0)} HP.`);
                    if (hp <= 0) {
                        console.log('You have been defeated!');
                        return false;
                    }
                    return combat(enemy);
                }
            } else {
                console.log('Invalid input. The enemy attacks while you hesitate!');
                return combat(enemy);
            }
        } else {
            console.log("You have been walking for a while and nothing unusual has happened so you decide to take a break.");
            return true;
        }
    }

    // Main Game Actions
    while (isPlaying) {
        const playerAction = readlineSync.question('What would you like to do? (press [w] to walk, [i] to see inventory, [p] to print stats, [q] to quit): ');
        switch (playerAction) {
            case 'w':
                isPlaying = walk();
                break;
            case 'i':
                console.log(inventory.length === 0 ? 'Your inventory is empty.' : `Inventory: ${inventory.join(', ')}`);
                break;
            case 'p':
                console.log(`Name: ${userName}\nHP: ${hp}\nEnemies killed: ${enemiesKilled}`);
                break;
            case 'q':
                console.log('Thanks for playing! Goodbye.');
                isPlaying = false;
                break;
            default:
                console.log('Invalid input. Please try again.');
        }
    }

    // Ask to play again
    if (readlineSync.question('Would you like to play again? (y/n): ') === 'y') {
        playGame();
    } else {
        console.log('Thanks for playing! Goodbye.');
    }
}
playGame();
