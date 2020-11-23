import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {

  skill: Skill = new Skill();
  // msg: string;
  isNew: boolean;
  // tslint:disable-next-line:no-inferrable-types
  showMsg: boolean = false;
  constructor(
    private skillService: SkillService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    // tslint:disable-next-line:prefer-const
    let id = this.actRoute.snapshot.params.skillId;

    if (id){
      this.isNew = false;
      this.skillService.getSkillBySkillId(id).subscribe(
        (data) => {
          this.skill = data;
        }
      );
    }

    else{
      this.isNew = true;
      this.skill = {
        skillId: null,
        skillName: ' ',
        details: ' ',
        empId: null
      };
    }
  }

  save(): any {
    let ob: Observable<Skill>;

    if (this.isNew) {
      ob = this.skillService.addSkills(this.skill);
    }
    ob.subscribe(
      (data) => {
        this.router.navigateByUrl('/success');
        this.showMsg = true;
      }
    );

  }

}
