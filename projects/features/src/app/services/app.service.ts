import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { mockUsers, mockLogins, MockUser } from '../mocks/mock-kpi-data';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private auth: AuthService) {}

  /** Đăng nhập giả lập */
  login(username: string, password: string): boolean {
    const login = mockLogins.find(l => l.username === username && l.password === password);
    if (login) {
      const user = mockUsers.find(u => u.userID === login.userID);
      if (user) {
        // ⚡ Lưu token, userID, roles + roleLabels
        this.auth.setSession(
          login.token,
          user.roles,
          user.name,
          user.roleLabels,
          user.userID
        );
        return true;
      }
    }
    return false;
  }

  /** Logout */
  logout() {
    this.auth.logout();
  }

  /** Lấy thông tin user hiện tại */
  getCurrentUser(): MockUser | null {
    const info = this.auth.getUserInfo();
    if (!info) return null;

    return mockUsers.find(u => u.userID === info.userID) || null;
  }
}
