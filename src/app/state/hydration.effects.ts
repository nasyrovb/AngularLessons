import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { distinctUntilChanged, map, switchMap, tap } from "rxjs/operators";
import { BrowserStorageService } from "../storage/storage.service";
import * as fromRoot from "./app-state";
import * as HydrationActions from "./hydration.actions";

@Injectable()
export class HydrationEffects implements OnInitEffects {
  hydrate$ = createEffect(() =>
    this.action$.pipe(
      ofType(HydrationActions.hydrate),
      map(() => {
        const storageValue = this.browserStorageService.get("state");
        if (storageValue) {
          try {
            const state = JSON.parse(storageValue);
            return HydrationActions.hydrateSuccess({ state });
          } catch {
            this.browserStorageService.remove("state");
          }
        }
        return HydrationActions.hydrateFailure();
      })
    )
  );

  serialize$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(HydrationActions.hydrateSuccess, HydrationActions.hydrateFailure),
        switchMap(() => this.store),
        distinctUntilChanged(),
        tap((state) => this.browserStorageService.set("state", JSON.stringify(state)))
      ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions, 
    private store: Store<fromRoot.AppState>, 
    private browserStorageService: BrowserStorageService) {}

  ngrxOnInitEffects(): Action {
    return HydrationActions.hydrate();
  }
}

