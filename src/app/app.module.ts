import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Mycomponents/nav/nav.component';
import { FotterComponent } from './Mycomponents/fotter/fotter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FotterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
