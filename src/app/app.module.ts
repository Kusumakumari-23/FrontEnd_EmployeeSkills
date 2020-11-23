import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { CreateEmployeeComponent } from './employee-list/create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSkillComponent } from './employee-list/create-skill/create-skill.component';
import { from } from 'rxjs';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateSkillComponent } from './update-employee/update-skill/update-skill.component';
import { SuccessComponent } from './success/success.component';
import { EmpSuccessComponent } from './success/emp-success/emp-success.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    EmployeeListComponent,
    SkillDetailsComponent,
    CreateEmployeeComponent,
    CreateSkillComponent,
    UpdateEmployeeComponent,
    UpdateSkillComponent,
    SuccessComponent,
    EmpSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
