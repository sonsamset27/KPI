import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  isCollapsed = false;
  openKPIs = false;
  activeRoute = '';
  roles: string[] = [];   // 🚀 hỗ trợ nhiều role

  constructor(private router: Router, private appService: AppService) {
    this.activeRoute = this.router.url;
    this.router.events.subscribe(() => {
      this.activeRoute = this.router.url;
    });

    // 🚀 Lấy roles hiện tại của user
    const user = this.appService.getCurrentUser();
    if (user) {
      this.roles = user.roles; // ví dụ: ['HT'] hoặc ['HT','TDV']
    }
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

  /** Trả về true nếu roles hiện tại có quyền xem menu */
  canView(item: string): boolean {
    // Gom quyền theo từng role
    const rolePermissions: Record<string, string[]> = {
      HDT: ['university', 'approve'],
      HT: ['mykpi', 'university', 'unit', 'approve', 'self'],
      PHT: ['mykpi', 'unit', 'self'],
      TDV: ['mykpi', 'unit', 'personal', 'approve', 'self'],
      PDV: ['mykpi', 'personal', 'self'],
      NV: ['mykpi', 'self'],
      PTCCB: ['mykpi', 'approve', 'self'],
    };

    // Nếu user có nhiều role => merge tất cả quyền
    for (const role of this.roles) {
      if (rolePermissions[role]?.includes(item)) {
        return true;
      }
    }
    return false;
  }
}
