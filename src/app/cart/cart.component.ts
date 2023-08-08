import { Component } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  menu: Menu[] | undefined; // Declaring a variable to store an array of Menu objects

  constructor(private menuService:MenuService){}

  ngOnInit(){
    this.menu=this.menuService.getMenu(); // Calling getMenu() method from MenuService to populate the menu array
    //console.log(this.menuService.getMenu());
    
  }
}
