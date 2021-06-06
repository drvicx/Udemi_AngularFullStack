/**
 *=05. TypeScript Crash Course - Creating Classes
 *     19. TypeScript Modules: Import and Export
 */

/**
 *=EXPORT Class Racoon
 */
export class Racoon {
    //--protected field
    protected _className: string = "Racoon";
    //--Constructor
    constructor(private _name: string, private _color: string) {
    }
    //--NoAccessors
    //--Getter
    getInfo() {
        return `${this._className}: ${this._name}, ${this._color}`;
    }
}
