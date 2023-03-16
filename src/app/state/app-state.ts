import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { cartReducer } from "../cart/state/cart.reducer";
import { hydrationMetaReducer } from "./hydration.reducer";


export interface AppState{}

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];

export const reducers: ActionReducerMap<AppState> = {cart: cartReducer}