import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AdmincategoryComponent } from './admincategory/admincategory.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { MenucategoryComponent } from './menucategory/menucategory.component';
import { CategorydishComponent } from './categorydish/categorydish.component';
import { AdddishComponent } from './adddish/adddish.component';
import { AdmindishComponent } from './admindish/admindish.component';
import { EditdishComponent } from './editdish/editdish.component';
import { LoginComponent } from './login/login.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Menu', component: MenuComponent},
  {path: 'Admin', component: AdminComponent},
  {path: 'Adminmenu', component: AdminmenuComponent},
  {path: 'Addmenu', component: AddmenuComponent},
  {path: 'menuitems/:id', component: EditmenuComponent},
  {path: 'Addcategory', component: AddcategoryComponent},
  {path: 'Admincategory', component: AdmincategoryComponent},
  {path: 'categoryitems/:id', component: EditcategoryComponent},
  {path: 'allcategories/:_menuId', component: MenucategoryComponent},
  {path: 'alldishes/:_categoryId', component: CategorydishComponent},
  {path: 'Adddish', component: AdddishComponent},
  { path: 'Admindish', component: AdmindishComponent },
  { path: 'dishitems/:_dishId', component: EditdishComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Logincustomer', component: LogincustomerComponent},
  {path: 'Cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }