/**
 *=05. TypeScript Crash Course - Creating Classes
 *     13. Creating Classes
*/

//--Class1: less security
class CustomerOld {
    //--properties/props/fields
    firstName: string;
    lastName: string;
    age: number;
}

//--Class2: more (but not enough) security
class CustomerNew {
    //--properties/props/fields
    firstName: string;
    lastName: string;
    age: number;

    //--constructor
    constructor(fn: string, ln: string, ag: number) {
        //-set Object props
        this.firstName = fn;
        this.lastName = ln;
        this.age = ag;
    }
}

//--Class3: hi security
class CustomerSecured {
    //--properties/props/fields
    private firstName: string;
    private lastName: string;
    private age: number;

    //--constructor
    constructor(fn: string, ln: string, ag: number) {
        //-set Object props
        this.firstName = fn;
        this.lastName = ln;
        this.age = ag;
    }

    //--Set protected fields/props
    //--Set firstName
    public setFName(fname: string): void {
        this.firstName = fname;
    }
    //--Set lastName
    public setLName(lname: string): void {
        this.lastName = lname;
    }
    //--Set age
    public setAge(ag: number): void {
        this.age = ag;
    }

    //--Get all protected data
    public getCustomerData(): string {
        return `${this.firstName} ${this.lastName} ${this.age}`;
    }
}


//--Create Instance/Object --Old Customer
let customer1 = new CustomerOld();

//--Set Object Properties/Fields
customer1.firstName = "John";
customer1.lastName = "Doe";

//--Create Instance/Object --New Customer
let customer2 = new CustomerNew("Homer", "Simpson", 41);

//--Create Instance/Object --Secured Customer
//--v1: no errors
//let customer3 = new CustomerSecured("Sasha", "Grey", 33);

//--v2: access error
let customer3 = new CustomerSecured(null, null, null);

//--ERROR:  Property 'firstName' is private and only accessible within class 'CustomerSecured'.
//  need Setter method in CustomerSecured class;
//customer3.firstName = "Sasha";

//--noErrors
customer3.setFName("Sasha");
customer3.setLName("Grey");
customer3.setAge(33);


//--Print Objects Fields
console.log(`OldCustomer: ${customer1.firstName} ${customer1.lastName}`);
console.log(`NewCustomer: ${customer2.firstName} ${customer2.lastName} ${customer2.age}`);

//--ACCESS ERROR: Property 'firstName' is private and only accessible within class 'CustomerSecured'
//console.log(`SecCustomer: ${customer3.firstName} ${customer3.lastName} ${customer3.age}`);
//--noErrors
console.log(`SecCustomer: ${customer3.getCustomerData()}`);

/*=
    OldCustomer: John Doe
    NewCustomer: Homer Simpson 41
    SecCustomer: Sasha Grey 33
*/
