import { Component, OnInit } from '@angular/core';
import {SkillModel} from '../model/skill.model';

@Component({
  selector: 'app-front-end-skills',
  templateUrl: './front-end-skills.component.html',
  styleUrls: ['./front-end-skills.component.scss']
})
export class FrontEndSkillsComponent implements OnInit {

  skills: SkillModel[] = [
    {name: 'Angular', percentage: 95},
    {name: 'Typescript', percentage: 90},
    {name: 'Redux', percentage: 90},
    {name: 'CSS', percentage: 75},
    {name: 'React', percentage: 70}
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
