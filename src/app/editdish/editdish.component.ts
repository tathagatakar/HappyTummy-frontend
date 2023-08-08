import { Component } from '@angular/core';
import { Categorydish } from '../categorydish';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorydishService } from '../categorydish.service';
import { SetDishIdService } from '../set-dish-id.service';

@Component({
  selector: 'app-editdish',
  templateUrl: './editdish.component.html',
  styleUrls: ['./editdish.component.css']
})
export class EditdishComponent {
  // Define dishForm object to store dish data
  dishForm:Categorydish = {
    _dishId: 0,
    _dishPrice: '',
    _dishName: '',
    _dishDescription: '',
    _dishImage: '',
    _nature: '',
    _isDeleted: false
  }

  constructor(private router:Router, private categoryDishService:CategorydishService, private setDishId: SetDishIdService, private route:ActivatedRoute) { }
// Fetch dishId from setDishId service
  dishId:number=this.setDishId.dishId;

  // Lifecycle hook called after component initialization
  ngOnInit():void {
    this.route.paramMap.subscribe((param) => {
      var _menuId=Number(param.get('_dishId'));
      console.log(this.dishId);
      
      this.getById(this.dishId);  
    })
  }

  // Function to fetch dish by Id and update dishForm object
  getById(_dishId:number){
    this.categoryDishService.getById(_dishId).subscribe((data) => {
      console.log(data);
      this.dishForm=data;
    })
  };

  // Function to update dish data
  update() {
    this.categoryDishService.update(this.dishForm).subscribe({
      next:(data)=> {
        this.router.navigate(["/Adminmenu"]);
      },
      error:(err)=>{
        console.log(err);  
      }
    })
    // this.router.navigate([`alldishes/${this.dishId}`])
  };
}
