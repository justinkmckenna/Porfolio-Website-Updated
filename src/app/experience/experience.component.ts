import {Component, OnInit} from '@angular/core';
import {ExperienceModel} from '../model/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: ExperienceModel[] = [
    {
      experienceDate: 'Aug 2020 - Current',
      experienceJobPosition: 'Web Developer',
      experienceCompanyLogo: 'assets/someinsurancecompany.png',
      experienceDescription: 'Working currently on creating a new Angular UI for customers, internals, and agents who service policies. Previous work includes internal software for uploading and modifying template documents for internals servicing customers.'
    },
    {
      experienceDate: 'Jan 2019 - May 2020',
      experienceJobPosition: 'Student Web Developer',
      experienceCompanyLogo: 'assets/ksu.png',
      experienceDescription: 'Assisted in development of applications for housing (to connect RAs with their students), room changes (students and change/swap rooms), student success (predict retention and GPA for each student to help with retention), and temporary keys (automating the key checkout process).'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
