const readLine = require('readline-sync');

let diceRolled = [];
let character1={
//empty to start
}

createChar(character1, diceRolled);

function rolld6(){
    return Math.ceil(Math.random()*6);
}

function rollDice(amount, list){
    for (let i =0; i<amount; i++){
        let roll = rolld6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll);
    }
}

function sum(list){
    let sum = 0;
    for (let i=0; i<list.length; i++){
        sum+=list [1]
    }
    return sum;
}

function rollStat(list){
    list=[];
    rollDice(4, list);
    return sum(list);
}

function createChar(character, list){
    character.name = readLine.question("Enter character name: ");
    console.log("Rolling STR");
    character.strength = rollStat(diceRolled);
    console.log("Rolling DEX");
    character.dexerity = rollStat(diceRolled);
    console.log("Rolling CON");
    character.constitution = rollStat(diceRolled);
    console.log("Rolling INT");
    character.intelligence = rollStat(diceRolled);
    console.log("Rolling WIS");
    character.wisdom = rollStat(diceRolled);
    console.log("Rolling CHA");
    character.charisma = rollStat(diceRolled);
    console.log(character)
}

function displayChara(chara){
    console.log(`Name: ${chara.strength}`);
    console.log(`Name: ${chara.dexerity}`);
    console.log(`Name: ${chara.constitution}`);
    console.log(`Name: ${chara.intelligence}`);
    console.log(`Name: ${chara.wisdom}`);
    console.log(`Name: ${chara.charisma}`);
}