import { Item } from "./Item";
import { LineItem } from "./lineItem";

export class Basket {
    private lineItems : LineItem[] = [];

    get totalCount() {
        return this.lineItems.reduce((total, current) => total + current.quantity, 0);
    }

    addLineItem(item: Item) {
        let lineItem = this.lineItems.find(lineItem => lineItem.id === item.id);          
        if( lineItem != null ) {
            lineItem.quantity = lineItem.quantity + 1;
        }
        else {
            this.lineItems.push(new LineItem(item));
        }
    }

    get LineItems() {
        return this.lineItems;
    }
}