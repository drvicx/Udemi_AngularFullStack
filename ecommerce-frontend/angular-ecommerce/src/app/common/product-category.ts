export class ProductCategory {

  //--13.4 Create Class props
  //
  // WRONG - need constructor props initialization in new TypeScript versions
  //id: number;
  //categoryName: string;

  // CORRECT - props initialized in constructor
  //--props declaration
  id: number;
  categoryName: string;

  //--props initialization
  constructor(id: number, categoryName: string) {
    //-set Object props
    this.id = id;
    this.categoryName = categoryName;
  }

}
