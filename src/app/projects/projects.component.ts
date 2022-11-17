import {Component, OnInit} from '@angular/core';
import {ProjectModel} from '../model/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectModel[] = [
    {
      projectName: 'KSU Sports Statistics',
      projectDescription: 'This was for my Senior Project at KSU. Myself and 3 others were tasked with creating a website to showcase Sports Statistics at KSU in a more informative way than implemented currently. I was the front end developer for the group and created a more polished, mobile friendly design.',
      projectStack: ['Angular', 'TS', 'NGRX', 'MDB'],
      projectDemo: 'https://www.youtube.com/embed/0pRRadQgbEI',
      projectRepo: 'https://github.com/Capstone-Group-1/KSU-Sport-Statistics',
      projectImage: 'assets/sports-stats.png'
    },
    {
      projectName: 'Facial Recognition App',
      projectDescription: 'I found a cool facial recognition library for python and wanted to make an app with it. A user uploads a picture, it is compared against a picture of someone on the server using the library, and it outputs whether the picture is of that person or not.',
      projectStack: ['Python, Flask'],
      projectDemo: 'https://www.youtube.com/embed/Ac9AInnN80A',
      projectRepo: 'https://github.com/justinkmckenna/Facial-Recognition-App',
      projectImage: 'assets/pope.png'

    },
    {
      projectName: 'Web Scraper',
      projectDescription: 'This program scrapes the social media site VK. The program logs in, scrolls through the news feed, and grabs all words in every post. It then outputs the word count and 10 most used words in english.',
      projectStack: ['Python', 'Selenium'],
      projectDemo: 'https://www.youtube.com/embed/6jE3JbdOLdc',
      projectRepo: 'https://github.com/justinkmckenna/Web-Scraper',
      projectImage: 'assets/web-scraper.png'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
