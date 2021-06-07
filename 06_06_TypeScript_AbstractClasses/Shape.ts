/**
 *=06. TypeScript Crash Course - Inheritance and Interfaces
 *     25. Abstract Classes - Overview
 *     26. Abstract Classes - Write Some Code
 */

/**
 *=EXPORT Abstract Parent Class Shape
 */
export abstract class Shape {
    //--Fields
    protected _className: string = "Shape";

    //--Constructor (protected)
    protected constructor(private _x: number, private _y: number) {
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

    //--NonAbstract Methods
    getInfo(): string {
        return `${this._className}: (x: ${this._x}, y: ${this._y});`;
    }
    //--Abstract Methods: MUST implemented in Child Classes
    abstract calculateArea(): number;
}

//--Test
//--ERROR: TS2511: Cannot create an instance of an abstract class.
//let myShapeTest = new Shape(10,15);
