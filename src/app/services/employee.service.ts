import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8090/empdata';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + '/emp/getemployees');
  }

  getEmployee(empId: bigint): Observable<any> {
    return this.http.get(`${this.baseUrl}/employeeById/${empId}`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl + '/createEmp', employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl + '/emp/updateEmployee', employee);
  }

  delete( empId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/employee/deleteById/${empId}`, {responseType: 'text'} );
  }

  // addEmployee(employee: Employee): Observable<Employee> {
  //   return this.http.post<Employee>(this.baseUrl + '/emp/addemployee', employee);
  // }

  // tslint:disable-next-line:ban-types
  update(empId: bigint, value: any): Observable<any> {
    return this.http.put<Employee>(`${this.baseUrl}/updateEmp/${empId}`, value);
  }

}
