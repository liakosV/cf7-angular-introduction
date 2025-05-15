import { Component, EventEmitter, inject, Input, Output, effect, SimpleChanges, OnChanges } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { sortBy } from 'lodash-es';
// import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent implements OnChanges {
  @Input() data: EPerson[] | undefined;
  @Input() myData: boolean = true;
  @Output() personClicked = new EventEmitter<EPerson>()

  epersonsData: EPerson[] = [];
  // personService = inject(PersonService);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      console.log("ngOnChangnes", this.data);
      this.epersonsData = this.data;
    }
    if (changes['myData']) {
      console.log("My Data")
    }
    
  }
  // constructor() {
  //   effect(() => {
  //     if (this.personService.modifiedDataTable()) {
  //       console.log("signal>>", this.data)
  //       this.epersonsData = this.data
  //     }
  //     this.personService.modifiedDataTable.set(false);
  //   })
  // }
  

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none'
  }



  onPersonClicked(person: EPerson) {
    console.log("Person>>>", person)
    this.personClicked.emit(person);
  }


  sortData(sortKey: keyof EPerson): void {
    // console.log(sortKey);
    // this.epersonsData = this.data

    if (this.sortOrder[sortKey] === "asc") {
      this.sortOrder[sortKey] = "desc";
      this.epersonsData = sortBy(this.data, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.epersonsData = sortBy(this.data, sortKey);
    }
    
    for (let key in this.sortOrder) {
      if (key !== sortKey) {
        this.sortOrder[key as keyof EPerson] = 'none';
      }
    }
    console.log("Simple DataTable>>", this.data)
  }

  sortSign(signKey: keyof EPerson) {
    if (this.sortOrder[signKey] === 'asc') return '\u2191'
    else if (this.sortOrder[signKey] === 'desc') return '\u2193'
    else return '';
  }
}
