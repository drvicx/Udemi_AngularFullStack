/**
 *=06. TypeScript Crash Course - Inheritance and Interfaces
 *     20. Inheritance - Overview
 *     21. Inheritance - Creating the Superclass and Subclass
 */

/**
 *=EXPORT Parent Class Shape
 */
export class Shape {
    //--Fields
    protected _className: string = "Shape";

    //--Constructor
    constructor(private _x: number, private _y: number) {
    }

    //--Accessors
    //--set/get: x
    public set x(value: number) {
        this._x = value;
    }
    public get x(): number {
        return this._x;
    }
    //--set/get: y
    public set y(value: number) {
        this._y = value;
    }
    public get y(): number {
        return this._y;
    }

    //--Getters
    getInfo(): string {
        return `${this._className}: (x: ${this._x}, y: ${this._y});`;
    }

}

//--Test
//let myShapeTest = new Shape(10,15);
//console.log(myShapeTest.getInfo());
/*=
    Shape: (x: 10, y: 15);
*/
