import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '../models/skill';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {

  // @Input()
  // public employee: Employee;
  public skills: Skill[];
  public skill: Skill = new Skill();
  empId: bigint;

  constructor(private skillService: SkillService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.empId = this.router.snapshot.params.empId;

    this.skillService.getSkillByEmpId(this.empId).subscribe( data => {
      this.skill = data;
      console.log(data);
    });

    console.log(this.empId);

  }

}
