import { Component } from '@angular/core';
import { Admincategory } from '../admincategory';
import { MenucategoryService } from '../menucategory.service';
import { SetCategoryIdService } from '../set-category-id.service';

@Component({
  selector: 'app-menucategory',
  templateUrl: './menucategory.component.html',
  styleUrls: ['./menucategory.component.css']
})

export class MenucategoryComponent {
  // Array to store adminCategory data
  public adminCategory: Admincategory[] = [];

  constructor(private menuCategoryService:MenucategoryService, private setCategoryId:SetCategoryIdService){}

  // Method to send category ID to SetCategoryIdService
  sendCategoryId(id:number){
    this.setCategoryId.setCategory(id);
  }
// Lifecycle hook called after component initialization
  ngOnInit() {
    // Fetch all adminCategory data from menuCategoryService
    this.menuCategoryService.all().subscribe((res:Admincategory[])=>
    {
      this.adminCategory=res;
    })
  }
}