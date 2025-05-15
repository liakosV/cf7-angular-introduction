import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, MatIconModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userService = inject(UserService);
  user = this.userService.user$;

  logout() {
    this.userService.logoutUser();
  }
}
