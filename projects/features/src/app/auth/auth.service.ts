import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly ROLE_KEY = 'user_role';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // 🔹 Giả lập đăng nhập: username quyết định role
    if (username === 'nhanvien' && password === '123') {
      this.setSession('fake-jwt-nhanvien', 'NV');
      return true;
    }
    if (username === 'truongdonvi' && password === '123') {
      this.setSession('fake-jwt-truongdonvi', 'TDV');
      return true;
    }
    return false;
  }

  private setSession(token: string, role: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.ROLE_KEY, role);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.ROLE_KEY);
    this.router.navigate(['auth/login']);
  }

  getRole(): string | null {
    return localStorage.getItem(this.ROLE_KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
