import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  // public employee: Employee = new Employee();
  // employee: Employee;
  // empId: bigint;
  constructor() { }

  ngOnInit(): void {

    // this.empId = this.router.snapshot.params.empId;

    // // this.empId = this.employee.empId;
    // this.empService.getEmployee(this.empId).subscribe(data => {
    //                                           this.employee = data;
    //                                           console.log(data);
    //                                          });
    // console.log(this.empId);

  }

}
