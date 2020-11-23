import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { Skill } from 'src/app/models/skill';
import { EmployeeService } from 'src/app/services/employee.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

// skill: Skill = new Skill();
employee: Employee;
// skills: Skill;
msg: string;
isNew: boolean;
  constructor(
    private empService: EmployeeService,
    // private skillService: SkillService,
    private actRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void{

    // tslint:disable-next-line:prefer-const
    let id = this.actRoute.snapshot.params.id;
    if (id){
      this.isNew = false;
      this.empService.getEmployee(id).subscribe(
        (data) => {
          this.employee = data;
        }
      );
      // for skill
      // this.skillService.getSkillByEmpId(id).subscribe(
      //   (data) => {
      //     this.skills = data;
      //     console.log(data);
      //   }
      // );
    }
    else{
      this.isNew = true;
      this.employee = {
        empId: null,
        firstName: '',
        lastName: '',
        hireDate: null,
        city: '',
        email: '',
        phoneNo: '',
        // skill: [{
        //   skillId: null,
        //   skillName: '',
        //   details: '',
        //   empId: null
        // }]
        skill: []
      };
    }
  }

  save(): any {
    // tslint:disable-next-line:prefer-const
    let ob: Observable<Employee>;
    // let obb: Observable<Skill>;
    if (this.isNew){
      ob = this.empService.addEmployee(this.employee);
      // obb = this.empService.addEmployee(this.skill);
      // console.log(ob);
    }else{
      ob = this.empService.updateEmployee(this.employee);
    }
    ob.subscribe(
      (Data) => {
        this.router.navigateByUrl('/empSuccess');
      }
      // (errResponse) => {
      //   this.msg = errResponse.console.error();

      // }
    );
  }

}


