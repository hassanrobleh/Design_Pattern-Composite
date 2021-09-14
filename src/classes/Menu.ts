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
        this.menuComponents.pop();
    }

    getChild(i: number): MenuComponent {
        return <MenuComponent> this.menuComponents[i];
    }

    

}