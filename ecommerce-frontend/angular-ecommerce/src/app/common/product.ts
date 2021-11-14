//--v4 -- FIX: correct way - use constructor to initialize props
export class Product {
    //--props declaration
    sku: string;
    name: string;
    description: string;
    unitPrice: number;
    imageUrl: string;
    active: boolean;
    unitsInStock: number;
    dateCreated: Date;
    lastUpdated: Date;

    //--initialize props in constructor
    constructor(sku: string,
                name: string,
                description: string,
                unitPrice: number,
                imageUrl: string,
                active: boolean,
                unitsInStock: number,
                dateCreated: Date,
                lastUpdated: Date) {
      //-set Object props
      this.sku = sku;
      this.name = name;
      this.description = description;
      this.unitPrice = unitPrice;
      this.imageUrl = imageUrl;
      this.active = active;
      this.unitsInStock = unitsInStock;
      this.dateCreated = dateCreated;
      this.lastUpdated = lastUpdated;
    }
}


//--v3 -- FIX: ignore new TypeScript version strict requirements
/*
export class Product {
    sku!: string;
    name!: string;
    description!: string;
    unitPrice!: number;
    imageUrl!: string;
    active!: boolean;
    unitsInStock!: number;
    dateCreated!: Date;
    lastUpdated!: Date;
}
*/

//--v2 -- FIX: assign blank values to props
/*
export class Product {
    sku: string = '';
    name: string = '';
    description: string = '';
    unitPrice: number = 0;
    imageUrl: string = '';
    active: boolean = false;
    unitsInStock: number = 0;
    dateCreated: Date = new Date();
    lastUpdated: Date = new Date();
}
*/

//--v1 -- FIX: set props undefined
/*
export class Product {
    sku: string | undefined;
    name: string | undefined;
    description: string | undefined;
    unitPrice: number | undefined;
    imageUrl: string | undefined;
    active: boolean | undefined;
    unitsInStock: number | undefined;
    dateCreated: Date | undefined;
    lastUpdated: Date | undefined;
}
*/

//--v0 -- ERRORS: need property initialization
//  TS2564: Property 'sku' has no initializer and is not definitely assigned in the constructor.
/*
export class Product {
    sku: string;
    name: string;
    description: string;
    unitPrice: number;
    imageUrl: string;
    active: boolean;
    unitsInStock: number;
    dateCreated: Date;
    lastUpdated: Date;
}
*/
