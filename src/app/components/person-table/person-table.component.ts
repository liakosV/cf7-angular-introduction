import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() personInput: Person | undefined;
  
  name = "Markos"

  person = {
    givenName: "Markos",
    surName: "Karampatsis",
    age: 52,
    email: "marka@aueb.gr"
  }
}
