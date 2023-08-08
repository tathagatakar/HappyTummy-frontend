import { Component } from '@angular/core';
import { Categorydish } from '../categorydish';
import { CategorydishService } from '../categorydish.service';
import { SetDishIdService } from '../set-dish-id.service';

@Component({
  selector: 'app-categorydish',
  templateUrl: './categorydish.component.html',
  styleUrls: ['./categorydish.component.css']
})
export class CategorydishComponent {
  // Define categoryDish array to store dish data
  public categoryDish: Categorydish[]=[];

  constructor(private categoryDishService:CategorydishService, private setDishId:SetDishIdService){ }
 // Lifecycle hook called after component initialization
  ngOnInit() {
    // Fetch all dishes from categoryDishService and update categoryDish array
    this.categoryDishService.all().subscribe((res:Categorydish[])=>
    {
      this.categoryDish=res;
    })
  }
  // Function to send dish Id to setDishId service
  sendId(id:number){
    this.setDishId.dishId=id
  }
}
