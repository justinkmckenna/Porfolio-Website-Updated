import { Component, OnInit } from '@angular/core';
import {SkillModel} from '../model/skill.model';

@Component({
  selector: 'app-back-end-skills',
  templateUrl: './back-end-skills.component.html',
  styleUrls: ['./back-end-skills.component.scss']
})
export class BackEndSkillsComponent implements OnInit {

  skills: SkillModel[] = [
    {name: 'C#', percentage: 90},
    {name: '.NET', percentage: 80},
    {name: 'MS SQL', percentage: 75},
    {name: 'Python', percentage: 75},
    {name: 'Flask', percentage: 70},
    {name: 'MongoDB', percentage: 70}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
