import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { Person } from 'src/app/shared/interfaces/person';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-person-table',
  imports: [CommonModule],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() personInput: Person | EPerson | undefined;
  
  addressOrEducation: string = '';
  name = "Markos"

  person = {
    givenName: "Markos",
    surName: "Karampatsis",
    age: 52,
    email: "marka@aueb.gr"
  }
  isPerson(): boolean {
      if (this.personInput && 'address' in this.personInput) {
        this.addressOrEducation = this.personInput.address
        return 'address' in this.personInput;
      } 
      return false
    }

    isEPerson():boolean {
      if(this.personInput && 'education' in this.personInput){
        this.addressOrEducation = this.personInput.education
        return 'education' in this.personInput;
      }
      return false;
    }






  // get extraLabel(): string | null {
  //   if (!this.personInput) return null;
  //   if ('address' in this.personInput) return 'Address';
  //   if ('education' in this.personInput) return 'Education';
  //   return null;
  // }

  // get extraValue(): string | null {
  //   if (!this.personInput) return null;
  //   if ('address' in this.personInput) return this.personInput.address;
  //   if ('education' in this.personInput) return this.personInput.education;
  //   return null;
  // }





 
}
