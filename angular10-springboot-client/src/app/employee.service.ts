import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private basUrl ="http://localhost:8080/ems-app/api/v1/employees";
  constructor(private http:HttpClient) { }
  
  getEmployee(id:number):Observable<any> {
    return this.http.get(this.basUrl+'/'+id);
  }
  createEmployee(employee :Object):Observable<Object> {
    return this.http.post(this.basUrl ,employee);
  }
  updateEmployee(id:number ,value:any):Observable<Object>{
   return this.http.put(this.basUrl+'/'+id,value);
  }
  deleteEmployee(id:number):Observable<any>{
   return this.http.delete(this.basUrl+'/'+id ,{responseType : 'text'});
   }
  getEmployeeList():Observable<any>{
    return this.http.get(this.basUrl);
  }

}
