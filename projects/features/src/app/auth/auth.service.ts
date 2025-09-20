import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly ROLE_KEY = 'user_role';
  private readonly NAME_KEY = 'user_name';
  private readonly ROLE_LABEL_KEY = 'user_role_label';
  private readonly USER_ID_KEY = 'user_id';

  constructor(private router: Router) {}

  setSession(token: string, roles: string[], name: string, roleLabels: string[], userID: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.ROLE_KEY, JSON.stringify(roles));
    localStorage.setItem(this.NAME_KEY, name);
    localStorage.setItem(this.ROLE_LABEL_KEY, JSON.stringify(roleLabels));
    localStorage.setItem(this.USER_ID_KEY, userID);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }

  getUserInfo() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) return null;
    return {
      token,
      roles: JSON.parse(localStorage.getItem(this.ROLE_KEY) || '[]'),
      name: localStorage.getItem(this.NAME_KEY) || '',
      roleLabels: JSON.parse(localStorage.getItem(this.ROLE_LABEL_KEY) || '[]'),
      userID: localStorage.getItem(this.USER_ID_KEY) || ''
    };
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
