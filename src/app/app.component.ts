import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-in-angular';
  
  name: string ="Dustin Fox";
  address: string ="176 Stone Ridge Blvd" ;
  phone: string ="513-331-1710";
  email: string ="dustinfox1996@gmail.com";
  linkedin: string ="www.linkedin.com/in/Dustin-Fox-8b3815207";
  github: string = "https://github.com/DustinFox96";

  blueButtonStyle: string = "btn btn-primary";
  redButtonStyle: string = "btn btn-danger";
  buttonStyle: string = this.blueButtonStyle;

 

  showPersonal = null;

  togglePersonal(): void {
    this.showPersonal =true;
  }

  constructor(
    private usrsvc: UserService
  ) {
    this.usrsvc.list().subscribe(
      users => { console.log(users);},
      err => { console.error(err); }
    );

  }


} 

