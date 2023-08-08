import { Component } from '@angular/core';
import { Categorydish } from '../categorydish';
import { AdmindishService } from '../admindish.service';

@Component({
  selector: 'app-admindish',
  templateUrl: './admindish.component.html',
  styleUrls: ['./admindish.component.css']
})
export class AdmindishComponent {
  // Define categoryDish array to store dish data
  public categoryDish: Categorydish[]=[];

  constructor(private adminDishService:AdmindishService){ }

  // Lifecycle hook called after component initialization
  ngOnInit() {
    // Fetch all dishes from adminDishService and update categoryDish array
    this.adminDishService.all().subscribe((res:Categorydish[])=>
    {
      // Filter out deleted dishes and update categoryDish array
      this.categoryDish=res.filter(cdish => cdish._isDeleted!=true);
      console.log(this.categoryDish);
    })
   
    
  }

  // Function to delete dish by Id
  deleteMenu(Id: number) {
    this.adminDishService.deleteMenu(Id).subscribe();
    this.ngOnInit();
  }
}
