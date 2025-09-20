import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  userName = '';
  userRole = '';
  isMenuOpen = false;

  constructor(private appService: AppService) {
    const user = this.appService.getCurrentUser();
    if (user) {
      this.userName = user.name;
      this.userRole = Array.isArray(user.roleLabels) 
      ? user.roleLabels.join(', ')   // ví dụ: "Hiệu trưởng, Trưởng đơn vị"
      : user.roleLabels;

    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.appService.logout();
  }
}
