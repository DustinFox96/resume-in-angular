import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  jobs: any[] = [
    {
       company: "Nordstrom",
       location:'Kenwood',
       role: "cook"

    },

    {
      company: "Great Wolf Lodge",
      location: "Mason",
      role: "cook"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
