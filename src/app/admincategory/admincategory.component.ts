import { Component } from '@angular/core';
import { Admincategory } from '../admincategory';
import { AdmincategoryService } from '../admincategory.service';
import { SetCategoryIdService } from '../set-category-id.service';

@Component({
  selector: 'app-admincategory',
  templateUrl: './admincategory.component.html',
  styleUrls: ['./admincategory.component.css']
})
export class AdmincategoryComponent {
  // Define adminCategory array to store category data
  public adminCategory: Admincategory[] = [];

  constructor(private adminCategoryService:AdmincategoryService, private setCategoryId:SetCategoryIdService){ }

  // Lifecycle hook called after component initialization
  ngOnInit()
  {
    // Fetch all categories from adminCategoryService and update adminCategory array
    this.adminCategoryService.all().subscribe((res:Admincategory[])=>
    {
      this.adminCategory=res;
    })
  }

  sendId(id:number) {
    // Function to send category id to setCategoryId service
    this.setCategoryId.setCategory(id);
  }
}
