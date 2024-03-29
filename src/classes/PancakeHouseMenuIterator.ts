import { MenuItem } from './MenuItem';
import { Iterator } from '../interfaces/Iterator';

export class PancakeHouseMenuIterator implements Iterator {
    items: MenuItem[];
    position: number = 0;

    constructor(items: MenuItem[] ) {
        this.items = items;
    }

    next(): object {
        let menuItem: MenuItem = this.items[this.position];
        this.position += 1;
        return menuItem;
    }

    hasNext(): boolean {
        if(this.position >= this.items.length || this.items[this.position] == null) {
            return false;
        } else {
            return true;
        }
    }

    

}