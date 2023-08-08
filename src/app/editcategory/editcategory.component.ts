import { Component } from '@angular/core';
import { Admincategory } from '../admincategory';
import { AdmincategoryService } from '../admincategory.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SetCategoryIdService } from '../set-category-id.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})

export class EditcategoryComponent {
  // Define categoryForm object to store category data
  categoryForm:Admincategory ={
    _categoryId:0,
    _categoryName:'',
    _categoryDescription:'',
    _categoryImage:''
  };

  constructor(private adminCategoryService: AdmincategoryService, private router:Router, private route:ActivatedRoute, private setCategoryId: SetCategoryIdService ) { }

  // Fetch categoryId from setCategoryId service
  categoryId:number = this.setCategoryId.categoryId;

  ngOnInit():void {
    // Subscribe to paramMap to get route parameters
    this.route.paramMap.subscribe((param) => {
      var _categoryId=Number(param.get('_categoryId'));
      console.log(this.categoryId);
      
      this.getById(this.categoryId);  
    })
  }

  // Function to fetch category by Id and update categoryForm object
  getById(_menuId:number){
    this.adminCategoryService.getById(_menuId).subscribe((data) => {
      console.log(data);
      this.categoryForm=data;
    })
  };

  // Function to update category data
  update() {
    this.adminCategoryService.update(this.categoryForm).subscribe({
      next:(data)=> {
        this.router.navigate(["/Admincategory"]);
      },
      error:(err)=>{
        console.log(err);  
      }
    })
    // this.router.navigate([`allcategories/${this.categoryId}`])
    //this.router.navigate([`Admincategories`])
  };
}
