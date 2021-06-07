/**
 *=06. TypeScript Crash Course - Inheritance and Interfaces
 *     20. Inheritance - Overview
 *     21. Inheritance - Creating the Superclass and Subclass
 */
//--IMPORTS
import { Shape } from './Shape';

/**
 *=Child Class Rectangle
 */
export class Rectangle extends Shape {
    //--Fields
    protected _className: string = "Rectangle";

    //--Constructor
    constructor(theX: number, theY: number, private _width: number, private _length: number) {
        //--call superclass/Shape constructor to set _x, _y fields;
        super(theX, theY);
    }
    //--Getters
    //  this.x - actually means - call get x() method from Shape Class,
    //  this.y - actually means - call get y() method from Shape Class;
    getInfo(): string {
        return `${this._className}: (x: ${this.x}, y: ${this.y}, width: ${this._width}, length: ${this._length});`;
    }
}

//--Test
//let myRectangleTest = new Rectangle(0,0, 3, 7);
//console.log(myRectangleTest.getInfo());
/*=
    Rectangle: (x: 0, y: 0, width: 3, length: 7);
*/
