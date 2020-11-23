import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl = 'http://localhost:8090/empdata';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl + '/skills/getskills');
  }

  getSkillByEmpId(empId: bigint): Observable<any> {
    // return this.http.get(`${this.baseUrl}/employeeById/${empId}`);
    return this.http.get(`${this.baseUrl}/skillsByempId/${empId}`);
  }

  getSkillBySkillId(skillId: bigint): Observable<any> {
    return this.http.get(`${this.baseUrl}/skills/skillsById/${skillId}`);
  }

  // tslint:disable-next-line:ban-types
  update(empId: bigint, value: any): Observable<Object> {
    return this.http.put<Skill>(`${this.baseUrl}/updateSkill/${empId}`, value);
  }

  addSkills(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.baseUrl + '/createSkills', skill);
  }

}
