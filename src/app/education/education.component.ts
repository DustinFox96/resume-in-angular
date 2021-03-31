import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  schools: any[] = [
    {
      name: "MAX Technical Training",
      year: "2021"
    },
    {
      name: "Kings Highschool",
      year: "2015"
    },
    {
      name: "Warren County Career Center",
      year: "2015"
    }
  ]

  technologies: string[] = ["git","C#", "Entity Framework", "SQL", "Angular",
   "Html/CSS/JavaScript", "Git/GitHub", "jQuery" ]
  constructor() { }

  ngOnInit(): void {
  }

}
