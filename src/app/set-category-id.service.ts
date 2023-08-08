import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetCategoryIdService {

  constructor() { }

  categoryId:number=0; // Stores the current category ID as a member variable

// Sets the category ID to the provided value
  setCategory(id: number){
    this.categoryId=id;
  }
}
