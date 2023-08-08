import { Component } from '@angular/core';
import { AdmincategoryService } from '../admincategory.service';
import { Admincategory } from '../admincategory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
// Define categoryForm object to store form data
export class AddcategoryComponent {
  categoryForm: Admincategory = {
    _categoryId:0,
    _categoryName:'',
    _categoryDescription:'',
    _categoryImage:''
  }

  constructor (private adminCategoryService:AdmincategoryService, private router:Router) {}
// Lifecycle hook called after component initialization
  ngOnInit():void {}

  // Function to create a category
  create(){
    this.adminCategoryService.createCategory(this.categoryForm)
    .subscribe({
      next:(data) => {
        // Redirect to Adminmenu page on successful creation
        this.router.navigate(["/Adminmenu"])
      },
      error:(err) => {
        // Log error if category creation fails
        console.log(err);
      }
    })
  }
}
