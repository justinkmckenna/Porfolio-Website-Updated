import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BiographyComponent } from './biography/biography.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { ExperienceComponent } from './experience/experience.component';
import { FrontEndSkillsComponent } from './front-end-skills/front-end-skills.component';
import { BackEndSkillsComponent } from './back-end-skills/back-end-skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent,
    ProjectsComponent,
    ProjectComponent,
    ExperienceComponent,
    FrontEndSkillsComponent,
    BackEndSkillsComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
