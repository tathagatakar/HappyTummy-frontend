import { Injectable } from '@angular/core';
import { Admincategory } from './admincategory';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmincategoryService {
  
  constructor(private http:HttpClient) { }

  // Method to fetch all admin categories
  public all():Observable<Admincategory[]>{    
    return this.http.get<Admincategory[]>(`http://localhost:9090/api/categoryitems`);
  }

  // Method to create a new category
  public createCategory(data:any){
    return this.http.post<any>("http://localhost:9090/api/categoryitem", data)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
    // Method to fetch category by ID
  getById(_categoryId:number) {
    return this.http.get<Admincategory>(`http://localhost:9090/api/categoryitems/${_categoryId}`);
  }
  // Method to update category
  update(payload: Admincategory) {
    return this.http.put<Admincategory>(`http://localhost:9090/api/categoryitems/${payload._categoryId}`, payload);
  }
}
