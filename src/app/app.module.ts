import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroesVilliansGridComponent } from './heroes-villians-grid/heroes-villians-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroesVilliansGridComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
