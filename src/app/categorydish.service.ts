import { Injectable } from '@angular/core';
import { Categorydish } from './categorydish';
import { Observable, map } from 'rxjs';
import { Adminmenu } from './adminmenu';
import { HttpClient } from '@angular/common/http';
import { SetCategoryIdService } from './set-category-id.service';

@Injectable({
  providedIn: 'root'
})
export class CategorydishService {

  constructor(private http:HttpClient, private setCategoryId: SetCategoryIdService) { }
// Fetches all dishes for the current category ID from the API.
  public all():Observable<Categorydish[]>{
    return this.http.get<Categorydish[]>(`http://localhost:9090/api/alldishes/${this.setCategoryId.categoryId}`);
  }

  // Creates a new dish in the API.
  public createDish(data:any){
    return this.http.post<any>("http://localhost:9090/api/dishitem", data)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
// Fetches a dish by ID from the API.
  getById(_dishId:number){
    return this.http.get<Categorydish>(`http://localhost:9090/api/dishitems/${_dishId}`);
  }
// Updates a dish in the API.
  update(payload:Categorydish){
    return this.http.put<Categorydish>(`http://localhost:9090/api/dishitems/${payload._dishId}`, payload);
  }
}
