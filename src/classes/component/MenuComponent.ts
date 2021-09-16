import { Iterator } from './../../interfaces/Iterator';
export abstract class MenuComponent {

    add(menuComponent: MenuComponent): void {
        throw new Error("Invalid operation for sorted list");
    }

    remove(menuComponent: MenuComponent): void {
        throw new Error("Invalid operation for sorted list");
    }

    getChild(i: number): MenuComponent {
        throw new Error("Invalid operation for sorted list");
    }

    getName(): string {
        throw new Error("Invalid operation for sorted list");
    }

    getDescription(): string {
        throw new Error("Invalid operation for sorted list");
    }

    getPrice(): number {
        throw new Error("Invalid operation for sorted list");
    }

    isVegetarian(): boolean {
        throw new Error("Invalid operation for sorted list");
    }

    print(): void {
        throw new Error("Invalid operation for sorted list");
    };


}