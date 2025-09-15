import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isCollapsed = false;      // trạng thái thu gọn / mở rộng
  openKPIs = false;         // submenu KPIs
  activeRoute = '';         // route đang chọn

  constructor(private router: Router) {
    this.activeRoute = this.router.url;
    this.router.events.subscribe(() => {
      this.activeRoute = this.router.url;
    });
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleKPIs() {
    this.openKPIs = !this.openKPIs;
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
