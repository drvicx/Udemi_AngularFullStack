/**
 *=06. TypeScript Crash Course - Inheritance and Interfaces
 *     27. Interfaces - Overview
 *     28. Interfaces - Write Some Code
 */
//--IMPORTS
import { Coach } from './Coachs';


/**
 *=Class GolfCoach which implements Interface Coach
 */
export class GolfCoach implements Coach {
    //--Interface Method Implementation
    getDailyWorkout(): string {
        return "Golf Program Today: Hit 100 balls at the golf range.";
    }
}
