//--For loops
console.log("--Loops");

for (let i=0; i<3; i++) {
    console.log(i);
}
console.log();
/*=
    0
    1
    2
*/

//--Arrays and For Loops 1: array of numbers
console.log("--Arrays (numbers)");

let myArray: number[] = [10, 20, 30];
 
for (let i=0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
console.log();
/*=
    10
    20
    30
*/

//--Arrays and For Loops 2
console.log("--Arrays (math)");

let total: number = 0;

for (let i=0; i < myArray.length; i++) {
    total += myArray[i];
}
console.log("total: " + total);
console.log("average: " + total / myArray.length);
console.log();
/*=
    total: 60
    average: 20
*/

//--Arrays and Simplefied For Loops: array of strings
console.log("--Arrays (strings)");

let names: string[] = ["John", "Jane", "Mike", "Luna"];
		
for (let name of names) {
    console.log(name);
}
console.log();
/*=
    John
    Jane
    Mike
    Luna
*/

//--Condition checking
console.log("--Arrays (strings checking)");
		
for (let name of names) {
    //--фигурные скобки ставить необязательно если выражение из 1 строки;
    if (name == "Luna")
        console.log(name + "  <<< Like a fish?");
    else
        console.log(name);
}
console.log();
/*=
    John
    Jane
    Mike
    Luna  <<< Like a fish?
*/

//--Remove/Add/Change Array Elements
console.log("--Arrays (elements manipulation)");

let names2: string[] = ["John", "Jane", "Mike", "Luna"];

//names2.splice(-1, 2);		        //--v1: remove last 2 elements; НЕ_РАБОТАЕТ;
let removed1: any = names2.pop();	//--v2: remove last 1 element and return value;
let removed2: any = names2.pop();

//names.push("Jake");
//names.push("Miranda");
let new1_id: any = names2.push("Jake");
let new2_id: any = names2.push("Miranda");

console.log(`Removed elements: ${removed1}, ${removed2}`);

//console.log(`newId1: ${new1_id}`);                  //== 3
//console.log(`newId2: ${new2_id}`);                  //== 4
console.log(`New elements....: ${names2[new1_id - 1]}, ${names2[new2_id - 1]}`);
console.log();

names2[3] = "Mirinda";

for (let name of names2) {
    console.log(name);
}
console.log();
/*=
    --Arrays (elements manipulation)
    Removed elements: Luna, Mike
    New elements....: Jake, Miranda

    John
    Jane
    Jake
    Mirinda
*/
