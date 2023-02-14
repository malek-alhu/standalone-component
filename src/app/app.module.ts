import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer';

 @NgModule({
   declarations: [],
   imports: [BrowserModule, StoreModule.forRoot(userReducer)],
   providers: [],
   bootstrap: [],

 })
export class AppModule {}
