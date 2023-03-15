import * as cartActions from "./cart.actions";
import { LineItem } from "../lineItem.model";
import * as fromRoot from "../../state/app-state";

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface CartState  extends EntityState<LineItem> {
    selectedLineItemId: number | null,
    error: string
}

export interface AppState extends fromRoot.AppState {
    cartState: CartState
}

export const cartAdapter: EntityAdapter<LineItem> = createEntityAdapter<LineItem>();

export const defaultCart: CartState = {
    ids: [],
    entities: {},
    selectedLineItemId: null,
    error: ""
  };

export const initialState = cartAdapter.getInitialState(defaultCart);

export function cartReducer(state = initialState, action: cartActions.ActionType) : CartState{
    switch(action.type) {
        case cartActions.cartActionsTypes.ADD_ITEM: {
            let currentItem : LineItem | undefined = state.entities[action.payload.id!]; 
            if(  currentItem !== undefined ) {
                const updateItem: LineItem = { id: currentItem.id, title: currentItem.title, price: currentItem.price, quantity: currentItem.quantity + 1}
                return cartAdapter.updateOne({ id: currentItem.id!, changes: updateItem }, state);
            }
            else {
                return cartAdapter.addOne(action.payload, state); 
            }                      
        }      
        case cartActions.cartActionsTypes.DELETE_ITEM: {
            return cartAdapter.removeOne(action.payload, state);
        }

        default: {
            return state;
        }
    }
};

const getCartFeatureState = createFeatureSelector<CartState>("cart");

export const getCart = createSelector(
    getCartFeatureState, 
    cartAdapter.getSelectors().selectAll 
 );

export const getTotalCount = createSelector(
    getCartFeatureState, 
    (state: CartState) => { 
        if(state === undefined) {
            return 0;
        }
        else {
            return Object.values(state.entities).reduce((total, current) => total = total + current!.quantity, 0)   
        }
    }
);

export const getTotalPrice = createSelector(
    getCartFeatureState, 
    (state: CartState) => { 
        if(state === undefined) {
            return 0;
        }
        else {
            return Object.values(state.entities).reduce((total, current) => total = total + current!.quantity * current!.price, 0)   
        }
    }
);

