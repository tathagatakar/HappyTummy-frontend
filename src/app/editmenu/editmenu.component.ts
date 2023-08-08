import { Component } from '@angular/core';
import { AdminmenuService } from '../adminmenu.service';
import { Adminmenu } from '../adminmenu';
import { ActivatedRoute, Router } from '@angular/router';
import { SetMenuIdService } from '../set-menu-id.service';

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.css']
})
export class EditmenuComponent {
  // Define menuForm object to store menu data
  menuForm: Adminmenu = {
    _menuId: 0,
    _menuName: '',
    _menuDescription: '',
    _menuImage: ''
  }

  constructor(private adminMenuService: AdminmenuService, private router:Router, private route:ActivatedRoute, private setMenuId: SetMenuIdService ) { }

  // Fetch menuId from setMenuId service
  menuId: number = this.setMenuId.menuId;

  // Lifecycle hook called after component initialization
  ngOnInit():void {
    // Subscribe to paramMap to get route parameters
    this.route.paramMap.subscribe((param) => {
      var _menuId=Number(param.get('_menuId'));
      console.log(this.menuId);
      
      this.getById(this.menuId);  
    })
  }
// Function to fetch menu by Id and update menuForm object
  getById(_menuId:number){
    this.adminMenuService.getById(_menuId).subscribe((data) => {
      console.log(data);
      this.menuForm=data;
    })
  };

  // Function to update menu data
  update() {
    this.adminMenuService.update(this.menuForm).subscribe({
      next:(data)=> {
        this.router.navigate(["/Adminmenu"]);
      },
      error:(err)=>{
        console.log(err);  
      }
    })};
}
