/**
 *=06. TypeScript Crash Course - Inheritance and Interfaces
 *     25. Abstract Classes - Overview
 *     26. Abstract Classes - Write Some Code
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

    //--Parent Class Abstract Method Implementation
    //  Rectangle Area = width * length;
    calculateArea(): number {
        //--Fake Implementation which produce Runtime Error
        //throw new Error("Method not implemented!");
        //--Real Implementation
        return this._width * this._length;
    }
}
