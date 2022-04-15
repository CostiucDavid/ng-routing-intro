import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { ElementComponent } from './pages/element/element.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
    HomeComponent,
    ItemComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
