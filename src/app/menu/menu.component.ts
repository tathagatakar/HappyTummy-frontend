import { Component } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  filterString:String='';
  
  public menu:Menu[]=[];

  constructor(private menuService:MenuService, private route: Router){}

  // Lifecycle hook called after component initialization
  ngOnInit()
  {
    // Fetch all menu data from menuService
    this.menuService.all().subscribe((res:Menu[])=>
    {
      this.menu=res;
    })
  }

  sendToCart(men:Menu){
    this.menuService.setMenu(men);
    this.route.navigate(['/Cart'])
  }

}
