/**
 *=06. TypeScript Crash Course - Inheritance and Interfaces
 *     25. Abstract Classes - Overview
 *     26. Abstract Classes - Write Some Code
 */
//--IMPORTS
import { Shape } from './Shape';
import { Cirlce } from './Cirlce';
import { Rectangle } from './Rectangle';


/**
 *=App Main Module ShapesPrinter
 */
//--Create Shape Objects
//let myShape = new Shape(10, 15);                      //--TS2511: Cannot create an instance of an abstract class!
let myCircle = new Cirlce(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3,7);

//--Create Array of Shapes
let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRectangle);

//--Print Shape Objects Info from Array
for (let shape of theShapes) {
    let shapeInfo: string = shape.getInfo();
    let shapeArea: number = shape.calculateArea();
    console.log(`${shapeInfo} Area: ${shapeArea.toFixed(2)};`);
}

/*=
    Cirlce: (x: 5, y: 10, radius: 20); Area: 1256.64;
    Rectangle: (x: 0, y: 0, width: 3, length: 7); Area: 21.00;
*/
