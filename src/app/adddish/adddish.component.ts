import { Component } from '@angular/core';
import { Categorydish } from '../categorydish';
import { Router } from '@angular/router';
import { CategorydishService } from '../categorydish.service';

@Component({
  selector: 'app-adddish',
  templateUrl: './adddish.component.html',
  styleUrls: ['./adddish.component.css']
})
export class AdddishComponent {
// Define dishForm object to store form data
  dishForm:Categorydish = {
    _dishId: 0,
    _dishPrice: '',
    _dishName: '',
    _dishDescription: '',
    _dishImage: '',
    _nature: '',
    _isDeleted: false
  }

  constructor(private router:Router, private categoryDishService:CategorydishService) { }

// Function to create a dish
  create(){
    this.categoryDishService.createDish(this.dishForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/Adminmenu"]) // Redirect to Adminmenu page on successful creation
      },
      error:(err) => {
        console.log(err); // Log error if dish creation fails
      }
    })
  }
}
