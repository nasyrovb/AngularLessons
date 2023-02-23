import { Item } from "./Item";

export interface LineItem {
    id?: number;
    title: string;
    price?: number;
    quantity: number;
}