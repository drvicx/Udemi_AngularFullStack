let found: boolean = true;
let personId: number = 1001;
let firstName: string = "John";
let lastName: string = "Doe";
let age: number = 41;
let grade: number = 88.6;
let personData: any = `{"fname": "${firstName}", "lname": "${lastName}"}`;

//--#Functions
//--anonimous
let getAnonimousData: any = function() {
    return `{"id": ${personId}, "value1": ${age}, "value2": ${grade}}`
};

let test = 'value';
let unknown = function() { return test };

//--Function for collect Person data
function getJSONData(fname: string, lname: string, age: number, grade: number) {
    let data: any = `{"firstName": "${fname}", "lastName": "${lname}", "age": ${age}, "grade": ${grade}}`;
    return data;
}

//--#asignment errors test
//found = 0;            //--ERROR: "Type 'number' is not assignable to type 'boolean'"
//firstName = 100;      //--ERROR: "Type 'number' is not assignable to type 'string'"
//age = "100";          //--ERROR: "Type 'string' is not assignable to type 'number'"


//--#write to console
console.log("=Person Card");
console.log("person: " + firstName + " " + lastName);
console.log("age: "+ age);
console.log("grade: " + grade);
console.log("testV: " + unknown());

console.log("data1: " + personData);
console.log("data2: " + getAnonimousData());
console.log("data3: " + getJSONData(firstName, lastName, age, grade));

//=OUTPUT:
/*=
    =Person Card
    person: John Doe
    age: 41
    grade: 88.6
    testV: value
    data1: {"fname": "John", "lname": "Doe"}
    data2: {"id": 1001, "value1": 41, "value2": 88.6}
    data3: {"firstName": "John", "lastName": "Doe", "age": 41, "grade": 88.6}
*/
