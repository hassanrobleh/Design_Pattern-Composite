import { MenuComponent } from "./component/MenuComponent";

export class MenuItem  extends MenuComponent{

    name: string = "";
    description: string = "";
    vegetarian: boolean = true;
    price: number = 0;

    constructor(name: string, desc: string, vege: boolean, price: number) {
        super()
        this.name = name;
        this.description = desc;
        this.vegetarian = vege;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getPrice(): number {
        return this.price;
    }

    isVegetarian(): boolean {
        return this.vegetarian;
    }

    print() {
        let result = " " + this.getName();
        if(this.isVegetarian()) {
            return "V"
        }
        result += ", " + this.getPrice();
        result += ", " + this.getDescription();

        return result;
    }
}

