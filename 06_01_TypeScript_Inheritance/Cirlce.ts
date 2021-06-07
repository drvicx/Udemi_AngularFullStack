/**
 *=06. TypeScript Crash Course - Inheritance and Interfaces
 *     20. Inheritance - Overview
 *     21. Inheritance - Creating the Superclass and Subclass
 */
//--IMPORTS
import { Shape } from './Shape';

/**
 *=Child Class Cirlce
 */
export class Cirlce extends Shape {
    //--Fields
    protected _className: string = "Cirlce";

    //--Constructor
    constructor(theX: number, theY: number, private _radius: number) {
        //--call superclass/Shape constructor to set _x, _y fields;
        super(theX, theY);
    }
    //--Getters
    //  this.x - actually means - call get x() method from Shape Class,
    //  this.y - actually means - call get y() method from Shape Class;
    getInfo(): string {
        return `${this._className}: (x: ${this.x}, y: ${this.y}, radius: ${this._radius});`;
    }
}

//--Test
//let myCirlceTest = new Cirlce(5,10, 20);
//console.log(myCirlceTest.getInfo());
/*=
    Cirlce: (x: 10, y: 15);
*/
