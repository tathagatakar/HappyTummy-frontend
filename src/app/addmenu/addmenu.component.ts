import { Component } from '@angular/core';
import { AdminmenuService } from '../adminmenu.service';
import { Adminmenu } from '../adminmenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent {
  // Define menuForm object to store form data
  menuForm: Adminmenu = {
    _menuId:0,
    _menuName: '',
    _menuDescription: '',
    _menuImage: ''
  }

  constructor(private adminMenuService: AdminmenuService, private router:Router) { }

  // Lifecycle hook called after component initialization
  ngOnInit():void {}

  // Function to create a menu
  create(){
    this.adminMenuService.createMenu(this.menuForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/Adminmenu"]) // Redirect to Adminmenu page on successful creation
      },
      error:(err) => {
        console.log(err); // Log error if menu creation fails
      }
    })
  }
}
