export class Item {
    id?: number;
    title = "";
    price?: number;
    description = "";
    category = "";
    image = "";
    rating?: {
        rate?: number;
        count?: number;
    }
}