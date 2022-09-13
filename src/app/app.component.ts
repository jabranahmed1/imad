import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HiringApp';
  front: boolean = true; // hada variable khass yrje3 fih letat dial luser wach logged in ola la
  constructor(private titleService: Title){
    titleService.setTitle('Hiring App');
    
  }
}
