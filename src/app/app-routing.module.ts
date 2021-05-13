import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'menu',component:MenuComponent},
  {path:'restaurent',component:RestaurentComponent},
  {path:'users',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AdminComponent,MenuComponent,RestaurentComponent,UserComponent]
