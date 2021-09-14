export abstract class MenuComponent {

    add(menuComponent: MenuComponent): void {
        throw new Error("Invalid operation for sorted list");
    }

    remove(menuComponent: MenuComponent) {
        throw new Error("Invalid operation for sorted list");
    }

    getChild(i: number): MenuComponent {
        throw new Error("Invalid operation for sorted list");
    }

    getName() {
        throw new Error("Invalid operation for sorted list");
    }

    getDescription() {
        throw new Error("Invalid operation for sorted list");
    }

    getPrice() {
        throw new Error("Invalid operation for sorted list");
    }

    isVegetarian() {
        throw new Error("Invalid operation for sorted list");
    }

    print() {
        throw new Error("Invalid operation for sorted list");
    }


}