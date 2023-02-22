import { Item } from "./Item";

export class LineItem {
    id?: number;
    title = "";
    price?: number = 0;
    quantity: number = 0;

    constructor(item: Item) {
        this.id = item.id;
        this.price = item.price;
        this.quantity = 1;
    }

}