import { Injectable } from '@angular/core';
import { Categorydish } from './categorydish';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmindishService {

  constructor(private http:HttpClient) { }

  // Fetches all dish items from the API.
  public all():Observable<Categorydish[]>{
    return this.http.get<Categorydish[]>(`http://localhost:9090/api/dishitems`);
  }

  // Deletes a dish item by ID from the API.
  public deleteMenu(id: number){
    const url = `http://localhost:9090/api/dishesdelete/${id}`;
    return this.http.delete<Categorydish>(url);
  }
}
