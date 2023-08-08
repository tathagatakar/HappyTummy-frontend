import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adminmenu } from './adminmenu';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminmenuService {

  constructor(private http:HttpClient) { }
// Fetches all menu items from the API.
  public all():Observable<Adminmenu[]>{
    return this.http.get<Adminmenu[]>(`http://localhost:9090/api/menuitems`);
  }
// Creates a new menu item in the API.
  public createMenu(data:any){
    return this.http.post<any>("http://localhost:9090/api/menuitem", data)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
// Fetches a menu item by ID from the API.
  getById(_menuId:number){
    return this.http.get<Adminmenu>(`http://localhost:9090/api/menuitems/${_menuId}`);
  }
// Updates a menu item in the API.
  update(payload:Adminmenu){
    //console.log(this.http.put(`http://localhost:9090/api/menuitems/${payload._menuId}`, payload));
    return this.http.put<Adminmenu>(`http://localhost:9090/api/menuitems/${payload._menuId}`, payload);
  }
}
