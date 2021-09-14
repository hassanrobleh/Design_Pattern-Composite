import { MenuComponent } from "./component/MenuComponent";

export class Menu extends MenuComponent {

    menuComponents: any[];
    name: string;
    description: string;

    constructor(menuComponents: [], name: string, description: string) {
        super();
        this.menuComponents = menuComponents;
        this.name = name;
        this.description = description;
    }

    add(menuComponent: MenuComponent) {
        this.menuComponents.push(menuComponent);
    }

    remove(menuComponent: MenuComponent) {
        const componentIndex = this.menuComponents.indexOf(menuComponent);
        this.menuComponents.splice(componentIndex, 1);
    }

    getChild(i: number): MenuComponent {
        return <MenuComponent> this.menuComponents[i];
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    print() {
        let result = "\n" + this.getName();
        result += "\n" + this.getDescription();
        result += "-----------------";
    }

}