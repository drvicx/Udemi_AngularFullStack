/**
 *=05. TypeScript Crash Course - Creating Classes
 *     15. Defining Accessors
*/

//--Class4: Accessors Getter/Setter example
class Racoon {
    //--pseudo protected (underscored) properties/props/fields
    private _animalType: string;
    private _name: string;

    //--constructor
    constructor(ac: string, n: string) {
        //-set Object props
        this._animalType = ac;
        this._name = n;
    }

    //--ACCESSOR METHODS

    //--GETTERS
    //--Get protected fields/props
    //--public by-default
    //public get animalType(): string {
    get animalType(): string {
        return this._animalType;
    }
    //--public by-default
    get animalName(): string {
        return this._name;
    }

    //--SETTERS
    //--Set protected fields/props
    //--public by-default
    set animalType(value: string) {
        this._animalType = value;
    }
    //--public by-default
    set animalName(value: string) {
        this._name = value;
    }
    //--public by-default
    //--Get all protected data
    public getRacoonInfo(): string {
        return `${this._name} ${this._animalType}`;
    }
}


//--Create Instance/Object --Smart Racoon
let myRacoon = new Racoon(null, null);
myRacoon.animalType = "Racoon";
myRacoon.animalName = "Bob";

//--Get Racoon Filed Data
console.log(`AnimalType.: ${myRacoon.animalType}`);
console.log(`AnimalName.: ${myRacoon.animalName}`);

//--Get Racoon Info
console.log(`JustRacoon.: ${myRacoon.getRacoonInfo()}`);

//--#COMPILE ERROR:
//--    RacoonAccessor.ts:20:16 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
//
//--#SOLUTION1:
//      > tsc -t es5 RacoonAccessor.ts && node RacoonAccessor.js
//
//--#SOLUTION2:
//  - create "tsconfig.json" file with "tsc --init" command, and set necessary parameters;

/*=
    AnimalType.: Racoon
    AnimalName.: Bob
    JustRacoon.: Bob Racoon
*/
