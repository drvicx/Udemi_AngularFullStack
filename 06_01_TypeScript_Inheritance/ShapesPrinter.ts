/**
 *=06. TypeScript Crash Course - Inheritance and Interfaces
 *     20. Inheritance - Overview
 *     21. Inheritance - Creating the Superclass and Subclass
 *     22. Inheritance - Pulling it all together in a Main App
 *     23. Inheritance - Developing a second Subclass
 *     24. Inheritance - Adding Shapes to an Array
 */
//--IMPORTS
import { Shape } from './Shape';
import { Cirlce } from './Cirlce';
import { Rectangle } from './Rectangle';


/**
 *=App Main Module ShapesPrinter
 */
//--Create Shape Objects
let myShape = new Shape(10, 15);
let myCircle = new Cirlce(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3,7);

//--Create Array of Shapes
let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

//--Print Shape Objects Info from Array
for (let shape of theShapes)
    console.log(shape.getInfo());

/*=
    Shape: (x: 10, y: 15);
    Cirlce: (x: 5, y: 10, radius: 20);
    Rectangle: (x: 0, y: 0, width: 3, length: 7);
*/
