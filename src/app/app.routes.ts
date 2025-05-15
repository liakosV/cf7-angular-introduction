import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { RestrictedContentComponent } from './components/restricted-content/restricted-content.component';

// GUARDS
import { authGuard } from './shared/guards/auth.guard';
import { adminRoleGuard } from './shared/guards/admin-role.guard';



export const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'input-example', component: ComponentInputExampleComponent},
  {path: 'for-directive', component: ForDirectiveExampleComponent},
  {path: 'event-bind', component: EventBindExampleComponent},
  {path: 'simple-datatable-example', component: SimpleDatatableExampleComponent},
  {path: 'component-output-example', component: ComponentOutputExampleComponent},
  {path: 'template-driven-form-example', component: TemplateDrivenFormExampleComponent},
  {path: 'reactive-form-example', component: ReactiveFormExampleComponent},
  {path: 'http-client-example', component: HttpClientExampleComponent},
  {path: 'user-registration', component: UserRegistrationComponent, canActivate: [authGuard, adminRoleGuard]},
  {path: 'login', component: UserLoginComponent},
  {path: 'restricted-content', component: RestrictedContentComponent}
  
];
