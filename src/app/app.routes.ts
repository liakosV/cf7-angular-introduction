import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';


export const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'input-example', component: ComponentInputExampleComponent},
  {path: 'for-directive', component: ForDirectiveExampleComponent},
  {path: 'event-bind', component: EventBindExampleComponent},
  {path: 'simple-datatable-example', component: SimpleDatatableExampleComponent}
  
];
