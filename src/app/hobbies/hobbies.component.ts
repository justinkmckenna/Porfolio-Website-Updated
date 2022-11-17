import {Component, OnInit} from '@angular/core';
import {HobbyModel} from '../model/hobby.model';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  hobbies: HobbyModel[] = [
    {name: 'Music', description: 'I enjoy playing piano mostly, but also play drums and a little guitar.', image: 'assets/piano.jpg'},
    {name: 'Exercise', description: 'I lift weights and hike often.', image: 'assets/dumbbells.jpg'},
    {name: 'Reading', description: 'I mostly enjoy reading philosophy and psychology, but have recently been reading more fiction.', image: 'assets/books.jpg'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
