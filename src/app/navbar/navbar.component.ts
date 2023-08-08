import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}
  public handleClick(){
    this.router.navigate(['ContactComponent'])
  }
}
