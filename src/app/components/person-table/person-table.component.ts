import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  name = "Markos"

  person = {
    givenName: "Markos",
    surName: "Karampatsis",
    age: 52,
    email: "marka@aueb.gr"
  }
}
