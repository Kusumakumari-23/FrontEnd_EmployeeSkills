import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

      public employees: Employee[];
      employee: Employee;
      p = 1;

  constructor(private empService: EmployeeService, private route: Router) { }


  ngOnInit(): void {

    this.empService.getAll().subscribe(data => this.employees = data);

  }

  // tslint:disable-next-line:typedef
  public setEmployee(employee: Employee) {
    this.employee = employee;

  }

  // tslint:disable-next-line:typedef
  deleteEmployeeAndSkill(empId: number) {
    if (confirm(`Are you sure to delete the employee#${empId}`)) {
      this.empService.delete(empId).subscribe(data => console.log(data));
    }
  }

//   employeeDetails(empId: number): any{
//     this.route.navigate(['empDetails', empId]);

// }

}
