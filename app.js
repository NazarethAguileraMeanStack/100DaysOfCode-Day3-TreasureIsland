const prompt = require("prompt-sync")({sigint: true});
const art = require("./textArt");


console.log(art.island);
console.log("Welcome to Treasure Island");
let decision1 = prompt("So many places to go. City or beach? ");
decision1 = decision1.toLowerCase();
if (decision1 === "city") {
    console.log(art.motorcycle);
    console.log("a flying motorcycle comes charging at you. you have died.");
    process.exit(0);
} else if (decision1 === "beach") {
    console.log(art.witchdoctor);
    let decision2 = prompt("A withdoctor asks for help with a ritual? help or leave?");
    decision2 = decision2.toLowerCase();
    if (decision2 === "leave") {
        console.log(art.dinosaur);
        console.log("You have angered the witchdoctor. you have died.");
        process.exit(0);
    } else if (decision2 === "help") {
        console.log(art.kitty);
        let decision3 = prompt("The witch doctor has summoned a kitty. It runs away. Chase or leave?");
        decision3 = decision3.toLowerCase();
        if (decision3 === "leave") {
            console.log(art.alien);
            console.log("you have been abducted by aliens. you have died.");
        } else if (decision3 === "chase") {
            console.log(art.pusheen);
            console.log("Your kitty has been saved. The real treasure is finding a friend that will grow with you, happy and healthy.");
            console.log("you win");
        } else {
            console.log("invalid command");
            process.exit(0);
        }
    } else {
        console.log("invalid command");
        process.exit(0);
    }
} else {
    console.log("invalid command");
    process.exit(0);
}

