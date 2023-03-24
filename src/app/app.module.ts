import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { reducers, metaReducers } from './state/app-state';
import { EffectsModule } from '@ngrx/effects';
import { HydrationEffects } from './state/hydration.effects';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([HydrationEffects]),
    StoreDevtoolsModule.instrument(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
