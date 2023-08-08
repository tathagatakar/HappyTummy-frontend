import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { AdmincategoryComponent } from './admincategory/admincategory.component';
import { AdmindishComponent } from './admindish/admindish.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { FormsModule } from '@angular/forms';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { MenucategoryComponent } from './menucategory/menucategory.component';
import { CategorydishComponent } from './categorydish/categorydish.component';
import { AdddishComponent } from './adddish/adddish.component';
import { EditdishComponent } from './editdish/editdish.component';
import { SearchPipe } from './search.pipe';
import { LoginComponent } from './login/login.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    MenuComponent,
    AdminComponent,
    AdminmenuComponent,
    AdmincategoryComponent,
    AdmindishComponent,
    AddmenuComponent,
    EditmenuComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    MenucategoryComponent,
    CategorydishComponent,
    AdddishComponent,
    EditdishComponent,
    SearchPipe,
    LoginComponent,
    LogincustomerComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
