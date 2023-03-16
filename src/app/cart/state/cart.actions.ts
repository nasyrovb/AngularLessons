import { Action } from "@ngrx/store";
import { LineItem } from "../lineItem.model";

export enum cartActionsTypes {
    ADD_ITEM = "[LineItem] Add Item",
    DELETE_ITEM = "[LinenItem] Delete Item",
}

export class AddItem implements Action {
    readonly type = cartActionsTypes.ADD_ITEM

    constructor(public payload: LineItem) {}
}

export class DeleteItem implements Action {
    readonly type = cartActionsTypes.DELETE_ITEM

    constructor(public payload: number) {}
}

export type ActionType = AddItem | DeleteItem ;