/**
 *=06. TypeScript Crash Course - Inheritance and Interfaces
 *     25. Abstract Classes - Overview
 *     26. Abstract Classes - Write Some Code
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

    //--Parent Class Abstract Method Implementation
    //  Circle Area = Pi*R^2
    calculateArea(): number {
        //--error: returns string but must return number type
        //return (Math.PI * Math.pow(this._radius, 2)).toFixed(2);
        //--correct
        return Math.PI * Math.pow(this._radius, 2);
    }
}
