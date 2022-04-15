import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ElementComponent } from './pages/element/element.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'element/:id/:product/:price', component: ElementComponent},
  {path: '**', component: NotFoundComponent}
];
// новые возможности (redirect file)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
