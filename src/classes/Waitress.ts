import { MenuComposite } from './MenuComposite';
import { Menu } from './../interfaces/Menu';
import { MenuItem } from './MenuItem';
import { Iterator } from './../interfaces/Iterator';
import { DinerMenu } from './DinerMenu';
import { PancakeHouseMenu } from './PancakeHouseMenu';
import { MenuComponent } from './component/MenuComponent';
export class Waitress {

    // pancakeHouseMenu: Menu;
    // dinerMenu: Menu;
    // cafeMenu: Menu
    allMenus: MenuComponent;

    // constructor(pancake: Menu, diner: Menu, cafe: Menu) {
    //     this.pancakeHouseMenu = pancake;
    //     this.dinerMenu = diner;
    //     this.cafeMenu = cafe
    // }

    constructor(allMenus: MenuComponent) {
        this.allMenus = allMenus;

    }

    // public printMenuPancakeIterator() {
    //     let pancakeIterator = this.pancakeHouseMenu.createIterator();
    //     return this.printMenus(pancakeIterator);
    // }

    // public printMenuDinerIterator() {
    //     let dinerIterator: Iterator = this.dinerMenu.createIterator();
    //     return this.printMenus(dinerIterator);
    // }

    // public printMenuCafeIterator() {
    //     let cafeIterator: Iterator = this.cafeMenu.createIterator();
    //     return this.printMenus(cafeIterator);
    // }

    // private printMenus(iterator: Iterator) {
    //     let result = "";
    //     while(iterator.hasNext()) {
    //         let menuItem  = <MenuItem> iterator.next();
            
    //         result += menuItem.getName() + " ";
    //         result += menuItem.getPrice()+ " ";
    //         result += menuItem.getDescription();

    //     }
    //     return result;
    // }

    printMenu() {
        return this.allMenus.print();
        // return "ok";
    }

}