import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  empId: bigint;
  constructor(
    private empService: EmployeeService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    // this.employee = new Employee();

    this.empId = this.actRoute.snapshot.params.empId;

    this.empService.getEmployee(this.empId)
    .subscribe(data => {
        this.employee = data;
        console.log(data);
      }, error => console.log(error)
    );
    console.log(this.empId);
  }

  updateDetails(): any {
    this.empService.update(this.empId, this.employee)
    .subscribe(
      data => {
        console.log(data);
        this.employee = new Employee();
        this.router.navigateByUrl('/empList');
      }
    );


    }

    save(): any {
      this.updateDetails();
    }
  }


