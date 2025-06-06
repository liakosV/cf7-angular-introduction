import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  
  users: Person[] = [{
    "givenName": "Daltfresh",
    "surName": "Burgan",
    "age": 1,
    "email": "gburgan0@microsoft.com",
    "address": "PO Box 78140"
  }, {
    "givenName": "Sonair",
    "surName": "Burnett",
    "age": 2,
    "email": "kburnett1@t.co",
    "address": "Apt 1386"
  }, {
    "givenName": "Otcom",
    "surName": "Senechault",
    "age": 3,
    "email": "jsenechault2@forbes.com",
    "address": "PO Box 59903"
  }, {
    "givenName": "Toughjoyfax",
    "surName": "Byas",
    "age": 4,
    "email": "bbyas3@privacy.gov.au",
    "address": "Room 1606"
  }, {
    "givenName": "Otcom",
    "surName": "Muat",
    "age": 5,
    "email": "cmuat4@msn.com",
    "address": "PO Box 79278"
  }, {
    "givenName": "Biodex",
    "surName": "Casellas",
    "age": 6,
    "email": "dcasellas5@quantcast.com",
    "address": "Suite 5"
  }, {
    "givenName": "Solarbreeze",
    "surName": "Frend",
    "age": 7,
    "email": "kfrend6@desdev.cn",
    "address": "Apt 112"
  }, {
    "givenName": "Y-find",
    "surName": "Dressel",
    "age": 8,
    "email": "ldressel7@bizjournals.com",
    "address": "Apt 497"
  }, {
    "givenName": "Alpha",
    "surName": "Hartmann",
    "age": 9,
    "email": "chartmann8@trellian.com",
    "address": "Suite 37"
  }, {
    "givenName": "Keylex",
    "surName": "Stoney",
    "age": 10,
    "email": "astoney9@taobao.com",
    "address": "2nd Floor"
  }, {
    "givenName": "Solarbreeze",
    "surName": "Constantinou",
    "age": 11,
    "email": "mconstantinoua@guardian.co.uk",
    "address": "Room 115"
  }, {
    "givenName": "Prodder",
    "surName": "O'Mailey",
    "age": 12,
    "email": "komaileyb@europa.eu",
    "address": "10th Floor"
  }, {
    "givenName": "Cookley",
    "surName": "Sargison",
    "age": 13,
    "email": "gsargisonc@jimdo.com",
    "address": "Room 81"
  }, {
    "givenName": "Trippledex",
    "surName": "Abbis",
    "age": 14,
    "email": "sabbisd@yale.edu",
    "address": "PO Box 37027"
  }, {
    "givenName": "Wrapsafe",
    "surName": "Spreadbury",
    "age": 15,
    "email": "dspreadburye@usatoday.com",
    "address": "Room 1381"
  }, {
    "givenName": "Zathin",
    "surName": "Dedham",
    "age": 16,
    "email": "cdedhamf@berkeley.edu",
    "address": "Apt 1363"
  }, {
    "givenName": "Prodder",
    "surName": "Tourner",
    "age": 17,
    "email": "otournerg@adobe.com",
    "address": "PO Box 81131"
  }, {
    "givenName": "Y-find",
    "surName": "Santi",
    "age": 18,
    "email": "tsantih@geocities.jp",
    "address": "Room 632"
  }, {
    "givenName": "Viva",
    "surName": "Baybutt",
    "age": 19,
    "email": "mbaybutti@ox.ac.uk",
    "address": "Suite 47"
  }, {
    "givenName": "Opela",
    "surName": "Gobbett",
    "age": 20,
    "email": "agobbettj@tinyurl.com",
    "address": "3rd Floor"
  }]
}
