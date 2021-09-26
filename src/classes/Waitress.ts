import { MenuComposite } from './MenuComposite';
import { Menu } from './../interfaces/Menu';
import { MenuItem } from './MenuItem';
import { Iterator } from './../interfaces/Iterator';
import { DinerMenu } from './DinerMenu';
import { PancakeHouseMenu } from './PancakeHouseMenu';
import { MenuComponent } from './component/MenuComponent';
export class Waitress {

    
    allMenus: MenuComponent;

    constructor(allMenus: MenuComponent) {
        this.allMenus = allMenus;

    }

    printMenu() {
        return this.allMenus.print();
        // return "ok";
    }

}
