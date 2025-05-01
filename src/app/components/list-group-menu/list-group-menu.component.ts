import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-group-menu',
  imports: [RouterModule],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {
  menu = [
    {text: 'Component Input Example', linkName: 'input-example'},
    {text: '@for Directive Example', linkName: 'for-directive'},
    {text: 'Event-Bind-Example', linkName: 'event-bind'},
    {text: 'Simple-DataTable-Example', linkName: 'simple-datatable-example'}
  ]
}
