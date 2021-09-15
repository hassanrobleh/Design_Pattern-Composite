import { MenuItem } from './MenuItem';
import { MenuComposite } from './MenuComposite';
import { CafeMenu } from './CafeMenu';
import { Waitress } from './Waitress';
import { DinerMenu } from './DinerMenu';
import { PancakeHouseMenu } from './PancakeHouseMenu';
import { MenuComponent } from './component/MenuComponent';

export class MenutestDrive {

    // diner() {
    //     let pancakeHouseMenu = new PancakeHouseMenu();
    //     let dinerMenu = new DinerMenu();
    //     let cafeMenu = new CafeMenu();

    //     let waitress = new Waitress(pancakeHouseMenu, dinerMenu, cafeMenu);
    //     return waitress.printMenuDinerIterator();
    // }

    // pancake() {
    //     let pancakeHouseMenu = new PancakeHouseMenu();
    //     let dinerMenu = new DinerMenu();
    //     let cafeMenu = new CafeMenu();

    //     let waitress = new Waitress(pancakeHouseMenu, dinerMenu, cafeMenu);
    //     return waitress.printMenuPancakeIterator();
    // }

    // cafe() {
    //     let pancakeHouseMenu = new PancakeHouseMenu();
    //     let dinerMenu = new DinerMenu();
    //     let cafeMenu = new CafeMenu();

    //     let waitress = new Waitress(pancakeHouseMenu, dinerMenu, cafeMenu);
    //     return waitress.printMenuCafeIterator();
    // }

    static main() {
        // let pancakeHouseMenu: MenuComponent = new MenuComposite("PANCAKE HOUSE MENU", "Breakfast");
        // let dinerMenu: MenuComponent = new MenuComposite("DINER MENU", "Lunch");
        // let cafeMenu: MenuComponent = new MenuComposite("CAFE MENU", "Diner");
        let dessertMenu: MenuComponent = new MenuComposite("DESSERT MENU", "Dessert of course !");

        let allMenus: MenuComponent = new MenuComposite("ALL MENUS", "All menus combined");

        // allMenus.add(pancakeHouseMenu);
        // allMenus.add(dinerMenu);
        // allMenus.add(cafeMenu);
        allMenus.add(dessertMenu);

        // add menu items here
        // dinerMenu.add(new MenuItem("Pasta", "Spaghetti with Marinara Sauce, and a slice of sourdough bread", true, 3.89));

        // dinerMenu.add(dessertMenu);

        // dessertMenu.add(new MenuItem("Apple Pie", "Apple pie with a flakey crust, topped with vanilla icecream", true, 1.59));

        let waitress: Waitress = new Waitress(allMenus);

        return waitress.printMenu();

    }
}

