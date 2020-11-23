import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // public employees: Employee[];
  //  employees: Employee;
  public employee: Employee = new Employee();
  // employees: {};
   empId: bigint;
  constructor(private empService: EmployeeService,  private router: ActivatedRoute) { }

  ngOnInit(): void {

    // this.employee = new Employee();

    this.empId = this.router.snapshot.params.empId;

    // this.empId = this.employee.empId;
    this.empService.getEmployee(this.empId).subscribe(data => {
                                              this.employee = data;
                                              console.log(data);
                                             });
    console.log(this.empId);

   }

}
// private empService: EmployeeService,  private router: ActivatedRoute
