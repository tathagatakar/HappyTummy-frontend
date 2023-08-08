import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetDishIdService {

  constructor() { }
  dishId: number=0; // Stores the current dish ID as a member variable

  // Sets the dish ID to the provided value
  setDish(id: number){
    this.dishId=id;
  }
}
