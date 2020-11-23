// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee-list/create-employee/create-employee.component';
import { CreateSkillComponent } from './employee-list/create-skill/create-skill.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpSuccessComponent } from './success/emp-success/emp-success.component';
import { SuccessComponent } from './success/success.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateSkillComponent } from './update-employee/update-skill/update-skill.component';

const routes: Routes = [
  {path: 'empList', component: EmployeeListComponent},
  {path: 'empDetails/:empId', component: EmployeeComponent},
  {path: 'addDetails', component: CreateEmployeeComponent},
  {path: 'edit/:empId', component: UpdateEmployeeComponent},
  {path: 'editSkill/:empId', component: UpdateSkillComponent},
  {path: 'addSkills', component: CreateSkillComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'empSuccess', component: EmpSuccessComponent}
  // {path: 'empForm', component: CreateEmployeeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
