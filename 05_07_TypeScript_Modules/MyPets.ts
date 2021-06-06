/**
 *=05. TypeScript Crash Course - Creating Classes
 *     19. TypeScript Modules: Import and Export
*/
//--IMPORTS
//import { Cat } from './animals/Cat.js';
import { Cat } from './animals/Cat';
import { Dog } from './animals/Dog';
import { Racoon } from './animals/Racoon';


//--Set Pets Info
let myCat = new Cat("Sasha", "Grey");
let myDog = new Dog("Bucks","Green");
let myRacoon = new Racoon("TrashPanda","BnW");

//--Print Pets Info
console.log("=MyPets:");
console.log(myCat.getInfo());
console.log(myDog.getInfo());
console.log(myRacoon.getInfo());

/*=
    =MyPets:
    Cat: Sasha, Grey
    Dog: Bucks, Green
    Racoon: TrashPanda, BnW
*/
