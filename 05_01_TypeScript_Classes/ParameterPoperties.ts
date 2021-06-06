/**
 *=05. TypeScript Crash Course - Creating Classes
 *     18. Parameter Properties
*/

//--the name of the TypeScript class and file name may differs
class Cat {

    //--Constructor with Parameter Properties
    constructor(private _name: string, private _color: string) {
        // no need for props assigning manually
    }
    //--Accessors
    set catName(catName: string) {
        this._name = catName;
    }
    get catName() {
        return this._name;
    }
    getCatInfo() {
        return `Cat(${this._name}, ${this._color})`;
    }
}

//--Tests
let myCat = new Cat("Mila", "grey");
console.log(myCat.getCatInfo());

myCat.catName = "Sasha";
console.log(myCat.getCatInfo());

/*=
    Cat(Mila, grey)
    Cat(Sasha, grey)
*/
