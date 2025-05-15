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
    {text: 'Component-Output-Example', linkName: 'component-output-example'},
    {text: '@for Directive Example', linkName: 'for-directive'},
    {text: 'Event-Bind-Example', linkName: 'event-bind'},
    {text: 'Simple-DataTable-Example', linkName: 'simple-datatable-example'},
    {text: 'Template-Driven-Form-Example', linkName: 'template-driven-form-example'},
    {text: 'Reactive-Form-Example', linkName: 'reactive-form-example'},
    {text: 'Http-Client-Example', linkName: 'http-client-example'},
    {text: 'User-Registration', linkName: 'user-registration'},
    {text: 'User Login', linkName: 'user-login'}
    
  ]
}
