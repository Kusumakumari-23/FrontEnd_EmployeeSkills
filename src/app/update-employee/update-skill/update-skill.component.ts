import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {

  skill: Skill = new Skill();
  empId: bigint;
  constructor(
    private skillService: SkillService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.empId = this.actRoute.snapshot.params.empId;

    this.skillService.getSkillByEmpId(this.empId)
    .subscribe(data => {
      this.skill = data;
      console.log(data);
    }, error => console.log(error)
    );
  }

  update(): any {
    this.skillService.update(this.empId, this.skill)
    .subscribe(data => {
      this.skill = new Skill();
      console.log(data);
      this.router.navigateByUrl('/empList');
    });
  }

  save(): any {
    this.update();
  }
}
