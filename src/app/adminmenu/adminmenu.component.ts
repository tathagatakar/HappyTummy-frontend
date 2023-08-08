import { Component } from '@angular/core';
import { Adminmenu } from '../adminmenu';
import { AdminmenuService } from '../adminmenu.service';
import { SetMenuIdService } from '../set-menu-id.service';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})

export class AdminmenuComponent {
  // Define adminMenu array to store menu data
  public adminMenu:Adminmenu[]=[];

  constructor(private adminMenuService:AdminmenuService, private setMenuId: SetMenuIdService){}
// Lifecycle hook called after component initialization
  ngOnInit() {
    // Fetch all menus from adminMenuService and update adminMenu array
    this.adminMenuService.all().subscribe((res:Adminmenu[])=>
    {
      this.adminMenu=res;
    })
  }
 // Function to send menu Id to setMenuId service
  sendId(id: number){
    this.setMenuId.setMenu(id);
  }
}