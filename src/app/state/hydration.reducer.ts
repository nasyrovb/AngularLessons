import { ActionReducer, INIT } from "@ngrx/store";
import * as fromRoot from "../state/app-state";

export const hydrationMetaReducer = (
    reducer: ActionReducer<fromRoot.AppState>
  ): ActionReducer<fromRoot.AppState> => {
    return (state, action) => {
      if (action.type === INIT) {
        const storageValue = localStorage.getItem("state");
        if (storageValue) {
          try {
            return JSON.parse(storageValue);
          } catch {
            localStorage.removeItem("state");
          }
        }
      }
      const nextState = reducer(state, action);
      localStorage.setItem("state", JSON.stringify(nextState));
      return nextState;
    };
  };