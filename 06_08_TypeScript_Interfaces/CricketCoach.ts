/**
 *=06. TypeScript Crash Course - Inheritance and Interfaces
 *     27. Interfaces - Overview
 *     28. Interfaces - Write Some Code
 */
//--IMPORTS
import { Coach } from './Coachs';


/**
 *=Class CricketCoach which implements Interface Coach
 */
export class CricketCoach implements Coach {
    //--Interface Method Implementation
    getDailyWorkout(): string {
        return "Cricket Program Today: Practice your spin bowling technique.";
    }
}
