import { CafeMenu } from './CafeMenu';
import { Menu } from './../interfaces/Menu';
import { Iterator } from '../interfaces/Iterator';
import { MenuComponent } from "./component/MenuComponent";
import { MenuItem } from './MenuItem';

export class MenuComposite extends MenuComponent {

    // cafeMenu: Menu
    menuComponents: any[] = [];
    name: string;
    description: string;

    // cafeMenu: Menu
    constructor(name: string, description: string) {
        super();
        // this.cafeMenu = new CafeMenu();
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
        // let result = "\n" + this.getName();
        // result += "\n" + this.getDescription();
        // result += " ok-ok-ok";
        
        // let iterator = this.menuComponents[Symbol.iterator]()
        // while(iterator.) {
        //     let menuComponent  = iterator.next();
        //     menuComponent.print()
        // }
        // return result;
        // return 'okokoj,odsf'
        let res = "";
        for(let c of this.menuComponents){
            res = c
        }
        return res;
    }

    
}