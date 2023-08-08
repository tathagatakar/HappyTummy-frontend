import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  constructor(private http:HttpClient) { }
// Fetches all menu items from the API.
  public all():Observable<Menu[]>{    
    return this.http.get<Menu[]>(`http://localhost:9090/api/Common`);
  }
  menu: Menu[]=[]; // Stores the current dish ID as a member variable

  // Sets the dish ID to the provided value
  setMenu(men: Menu){
    this.menu.push(men);
    console.log(this.menu);
    
  }

  getMenu(){
    return this.menu;
  }
  
}