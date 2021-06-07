/**
 *=06. TypeScript Crash Course - Inheritance and Interfaces
 *     27. Interfaces - Overview
 *     28. Interfaces - Write Some Code
 */
//--IMPORTS
import { Coach } from './Coachs';
import { CricketCoach } from './CricketCoach';
import { GolfCoach } from './GolfCoach';


/**
 *=Main App Module
 */
//--Create Couch Objects
let myCricketCouch = new CricketCoach();
let myGolfCouch = new GolfCoach();

//--Create Array of Coaches
let theCoaches: Coach[] = [];
theCoaches.push(myCricketCouch);
theCoaches.push(myGolfCouch);

//--Print Couches Program from Array of Coaches
for (let coach of theCoaches) {
    console.log(coach.getDailyWorkout());
}

/*=
    Cricket Program Today: Practice your spin bowling technique.
    Golf Program Today: Hit 100 balls at the golf range.
*/
