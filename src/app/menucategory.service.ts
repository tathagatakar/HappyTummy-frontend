import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admincategory } from './admincategory';
import { SetMenuIdService } from './set-menu-id.service';

@Injectable({
  providedIn: 'root'
})
export class MenucategoryService {

  constructor(private http:HttpClient, private setMenuId:SetMenuIdService) { }
// Fetches all categories for a specific menu from the API, using the menuId from SetMenuIdService.
  public all():Observable<Admincategory[]>{
    return this.http.get<Admincategory[]>(`http://localhost:9090/api/allcategories/${this.setMenuId.menuId}`);
  }
}
