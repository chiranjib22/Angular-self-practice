import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
    constructor(){
    //console.log('Home component constructor');
  }

  ngOnInit(): void {
    //console.log('Home component initialized');
  }
}
