import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetMenuIdService {

  constructor() { }

  menuId: number=0; // Stores the current menu ID as a member variable

  // Sets the menu ID to the provided value
  setMenu(id: number){
    this.menuId=id;
  }
}
